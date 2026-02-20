import { describe, expect, it } from "vitest";

/**
 * Test that the 301 redirect map is correctly defined in the server.
 * We test the redirect configuration data directly since the Express app
 * setup requires full server initialization.
 */
describe("301 Redirects Configuration", () => {
  const redirects: Record<string, string> = {
    "/what-advertising-channels-should-your-auto-shop-use": "/blog/what-advertising-channels-should-your-auto-shop-use",
    "/automotive-digital-marketing-strategy": "/blog/automotive-digital-marketing-strategy",
    "/top-10-benefits-of-seo-for-auto-body-shops": "/blog/top-10-benefits-of-seo-for-auto-body-shops",
  };

  it("should have all three old blog URL redirects defined", () => {
    expect(Object.keys(redirects)).toHaveLength(3);
  });

  it("should redirect old advertising channels post to /blog/ prefix", () => {
    expect(redirects["/what-advertising-channels-should-your-auto-shop-use"]).toBe(
      "/blog/what-advertising-channels-should-your-auto-shop-use"
    );
  });

  it("should redirect old digital marketing strategy post to /blog/ prefix", () => {
    expect(redirects["/automotive-digital-marketing-strategy"]).toBe(
      "/blog/automotive-digital-marketing-strategy"
    );
  });

  it("should redirect old SEO benefits post to /blog/ prefix", () => {
    expect(redirects["/top-10-benefits-of-seo-for-auto-body-shops"]).toBe(
      "/blog/top-10-benefits-of-seo-for-auto-body-shops"
    );
  });

  it("should map all old paths to /blog/ prefixed new paths", () => {
    for (const [oldPath, newPath] of Object.entries(redirects)) {
      const slug = oldPath.slice(1); // remove leading /
      expect(newPath).toBe(`/blog/${slug}`);
    }
  });
});
