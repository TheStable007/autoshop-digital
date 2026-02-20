# Vercel Deployment Guide for Auto Shop Digital

## 🚀 Quick Start (15 Minutes to Live)

This guide will help you deploy your Auto Shop Digital website to Vercel and connect autoshopdigital.com.

---

## Prerequisites

- GitHub account (free)
- Vercel account (free) - Sign up at https://vercel.com
- Access to GoDaddy DNS for autoshopdigital.com

---

## Step 1: Upload Project to GitHub (5 minutes)

### Option A: Using GitHub Web Interface (Easiest)

1. **Go to https://github.com/new**
2. **Create a new repository:**
   - Repository name: `autoshop-digital`
   - Visibility: Private (recommended) or Public
   - DO NOT initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Upload files:**
   - Click "uploading an existing file"
   - Drag and drop ALL folders and files from the vercel-export folder
   - Important files to include:
     - `client/` folder
     - `server/` folder
     - `shared/` folder
     - `drizzle/` folder
     - `package.json`
     - `vite.config.ts`
     - `tsconfig.json`
     - `vercel.json`
     - All other config files
   - Commit message: "Initial commit - Auto Shop Digital"
   - Click "Commit changes"

### Option B: Using Git Command Line

```bash
cd /path/to/vercel-export
git init
git add .
git commit -m "Initial commit - Auto Shop Digital"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/autoshop-digital.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel (5 minutes)

1. **Go to https://vercel.com/login**
2. **Sign in with GitHub**
3. **Click "Add New..." → "Project"**
4. **Import your GitHub repository:**
   - Find `autoshop-digital` in the list
   - Click "Import"

5. **Configure project settings:**
   - **Project Name:** `autoshop-digital`
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`

6. **Environment Variables (IMPORTANT):**
   
   Click "Environment Variables" and add these:

   ```
   NODE_ENV=production
   ```

   **Note:** The Manus-specific environment variables (DATABASE_URL, JWT_SECRET, etc.) won't work on Vercel. The site will function as a static site without database/auth features. If you need these features, see "Advanced Setup" section below.

7. **Click "Deploy"**
   - Vercel will build and deploy your site
   - Takes 2-3 minutes
   - You'll get a URL like: `autoshop-digital.vercel.app`

8. **Test the deployment:**
   - Click "Visit" to see your site
   - Verify all pages load correctly

---

## Step 3: Connect Custom Domain (5 minutes)

1. **In Vercel dashboard, go to your project**
2. **Click "Settings" → "Domains"**
3. **Add domain:**
   - Enter: `autoshopdigital.com`
   - Click "Add"

4. **Vercel will show you DNS configuration:**
   
   You'll see something like:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. **Update GoDaddy DNS:**
   - Log into GoDaddy
   - Go to autoshopdigital.com DNS Management
   - **Delete existing Manus records:**
     - Delete A records: 104.18.26.246, 104.18.27.246
     - Delete CNAME: cname.manus.space
   
   - **Add Vercel records** (use the exact values Vercel shows you):
     - Add A record for @ pointing to Vercel's IP
     - Add CNAME for www pointing to Vercel's CNAME

6. **Wait 5-10 minutes** for DNS propagation

7. **Back in Vercel, click "Refresh"** next to your domain
   - Status should change to "Valid Configuration"
   - SSL certificate will be issued automatically

8. **Test your domain:**
   - Visit https://autoshopdigital.com
   - Should load your site with SSL ✅

---

## Step 4: Verify Everything Works

### Check These Pages:
- ✅ Homepage: https://autoshopdigital.com
- ✅ Services: https://autoshopdigital.com/services/managed-local-seo
- ✅ Industries: https://autoshopdigital.com/industries/auto-repair-shops
- ✅ Locations: https://autoshopdigital.com/locations/california
- ✅ Blog: https://autoshopdigital.com/blog
- ✅ Get Started: https://autoshopdigital.com/get-started

### Check Mobile:
- Open site on mobile device
- Verify sticky CTA bar works
- Test click-to-call button
- Check hamburger menu

---

## What's Different from Manus?

### ✅ What Works:
- All pages and content
- All styling and design
- Mobile enhancements (sticky CTA, click-to-call)
- SEO (meta tags, sitemaps, schema)
- Blog posts
- Contact forms (frontend)
- Fast global CDN
- Automatic SSL
- Custom domain

### ❌ What Doesn't Work (Static Site):
- User authentication/login
- Database features
- Server-side API routes (tRPC)
- Dynamic content that requires a database

### 🔧 To Enable Database Features:

If you need database/auth features, you'll need to:

1. **Set up Vercel Postgres:**
   - In Vercel dashboard: Storage → Create Database → Postgres
   - Copy connection string
   - Add as environment variable: `DATABASE_URL`

2. **Set up authentication:**
   - Use Vercel's built-in auth or Auth0/Clerk
   - Update environment variables

3. **Redeploy:**
   - Push changes to GitHub
   - Vercel auto-deploys

---

## Troubleshooting

### Domain not connecting?
- Check DNS propagation: https://dnschecker.org
- Verify DNS records match exactly what Vercel shows
- Wait up to 24 hours for full propagation (usually 5-10 minutes)

### Build failing?
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Pages not loading?
- Check vercel.json rewrites configuration
- Verify dist folder is being generated
- Check browser console for errors

### SSL certificate issues?
- Vercel issues SSL automatically (takes 5-10 minutes)
- If it fails, try removing and re-adding the domain

---

## Post-Deployment

### Update Google Search Console:
1. Go to https://search.google.com/search-console
2. Verify autoshopdigital.com is still registered
3. Submit new sitemap: https://autoshopdigital.com/sitemap.xml

### Update Analytics:
- Verify Google Analytics is still tracking
- Check that events are firing correctly

### Monitor Performance:
- Vercel provides analytics in the dashboard
- Check Core Web Vitals
- Monitor uptime

---

## Future Updates

### To update your site:

1. **Make changes locally** (or in GitHub web editor)
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. **Vercel automatically deploys** (takes 1-2 minutes)
4. **Changes go live** at autoshopdigital.com

---

## Support

### Vercel Documentation:
- https://vercel.com/docs
- https://vercel.com/docs/concepts/projects/custom-domains

### Need Help?
- Vercel Support: https://vercel.com/support
- Vercel Community: https://github.com/vercel/vercel/discussions

---

## Cost

### Vercel Pricing:
- **Hobby (Free):** Perfect for this site
  - Unlimited deployments
  - 100 GB bandwidth/month
  - Automatic SSL
  - Custom domains
  
- **Pro ($20/month):** Only if you need:
  - More bandwidth
  - Team collaboration
  - Advanced analytics

**Your site will work perfectly on the free tier.**

---

## Returning to Manus Later

If Manus fixes the domain issue and you want to move back:

1. **In Vercel:** Remove autoshopdigital.com from domains
2. **In GoDaddy:** Update DNS back to Manus IPs
3. **In Manus:** Connect domain again
4. **Keep Vercel project** as backup

---

## Summary

✅ **15-20 minutes total deployment time**  
✅ **autoshopdigital.com will be live with SSL**  
✅ **All SEO value preserved**  
✅ **Professional hosting platform**  
✅ **Free tier is sufficient**  
✅ **Automatic deployments from GitHub**  

**Your site will be faster and more reliable on Vercel than it was on Manus.**

---

## Questions?

If you encounter any issues during deployment, refer to:
- This guide
- Vercel documentation
- Vercel support chat (available in dashboard)

**Good luck with your deployment!** 🚀
