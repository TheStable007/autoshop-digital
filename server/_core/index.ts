import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { generateSitemap } from "../sitemap";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  
  // Canonical URL redirect middleware - consolidate to HTTPS non-WWW
  app.use((req, res, next) => {
    const host = req.headers.host || '';
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    
    // Check if request is HTTP or has WWW
    const isHttp = protocol === 'http';
    const hasWww = host.startsWith('www.');
    
    if (isHttp || hasWww) {
      // Remove www. if present
      const cleanHost = hasWww ? host.substring(4) : host;
      // Redirect to HTTPS non-WWW version
      const canonicalUrl = `https://${cleanHost}${req.url}`;
      return res.redirect(301, canonicalUrl);
    }
    
    next();
  });
  
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // 301 Redirects for old site URLs
  const redirects: Record<string, string> = {
    "/what-advertising-channels-should-your-auto-shop-use": "/blog/what-advertising-channels-should-your-auto-shop-use",
    "/automotive-digital-marketing-strategy": "/blog/automotive-digital-marketing-strategy",
    "/top-10-benefits-of-seo-for-auto-body-shops": "/blog/top-10-benefits-of-seo-for-auto-body-shops",
  };

  for (const [oldPath, newPath] of Object.entries(redirects)) {
    app.get(oldPath, (_req, res) => {
      res.redirect(301, newPath);
    });
  }

  // Sitemap route
  app.get('/sitemap.xml', (_req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send(generateSitemap());
  });

  // Robots.txt route
  app.get('/robots.txt', (_req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(`User-agent: *\nAllow: /\nSitemap: https://autoshopdigital.com/sitemap.xml`);
  });

  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
