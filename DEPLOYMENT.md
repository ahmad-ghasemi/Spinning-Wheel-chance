# 🚀 Deployment Guide - راهنمای استقرار

This guide will help you deploy the Tetisnet Spinning Wheel PWA to various platforms.

## 📋 Pre-deployment Checklist

Before deploying, ensure:
- [ ] All files are present (index.html, manifest.json, sw.js, etc.)
- [ ] Replace `YOUR_USERNAME` in README.md with your actual GitHub username
- [ ] Update contact information in README.md
- [ ] Test the app locally to ensure everything works
- [ ] Check PWA features (offline mode, installation)

## 🌐 Platform-Specific Deployment

### 1. Vercel (Recommended) ⚡

**Why Vercel?**
- Free hosting for static sites
- Automatic HTTPS
- Global CDN
- Perfect for PWAs
- Zero configuration needed

**Steps:**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Go to project settings
   - Add your custom domain
   - Update DNS records as instructed

**Automatic Deployments:**
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests

### 2. GitHub Pages 📚

**Steps:**

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select source: "Deploy from a branch"
   - Choose branch: `main`
   - Folder: `/ (root)`

2. **Custom Domain (Optional):**
   - Add `CNAME` file with your domain
   - Configure DNS at your domain provider

**URL:** `https://YOUR_USERNAME.github.io/tetisnet-spinning-wheel`

### 3. Netlify 🌐

**Steps:**

1. **Deploy from Git:**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: (leave empty or `/`)

2. **Custom Domain:**
   - Go to Domain settings
   - Add custom domain
   - Configure DNS

**Features:**
- Form handling
- Split testing
- Analytics

### 4. Firebase Hosting 🔥

**Steps:**

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure:**
   - Public directory: `.` (current directory)
   - Single-page app: `No`
   - Overwrite index.html: `No`

4. **Deploy:**
   ```bash
   firebase deploy
   ```

### 5. Azure Static Web Apps ☁️

**Steps:**

1. **Create Static Web App:**
   - Go to Azure Portal
   - Create "Static Web Apps" resource
   - Connect to GitHub
   - Configure build:
     - App location: `/`
     - Api location: (leave empty)
     - Output location: (leave empty)

### 6. AWS S3 + CloudFront ☁️

**Steps:**

1. **Create S3 Bucket:**
   - Enable static website hosting
   - Upload all files
   - Set public read permissions

2. **Setup CloudFront:**
   - Create distribution
   - Set origin to S3 bucket
   - Configure HTTPS

### 7. Cloudflare Pages ⚡

**Steps:**

1. **Connect Repository:**
   - Go to Cloudflare Pages
   - Connect GitHub repository
   - Build settings:
     - Framework: None
     - Build command: (empty)
     - Build output: `/`

## 🔧 Environment-Specific Configurations

### Production Optimizations

1. **Update Service Worker Cache:**
   ```javascript
   const CACHE_NAME = 'gardoneh-shans-v1.0.1'; // Increment version
   ```

2. **Enable Compression:**
   - Most platforms enable gzip automatically
   - Verify with browser dev tools

3. **Add Security Headers:**
   ```json
   // vercel.json
   "headers": [
     {
       "source": "/(.*)",
       "headers": [
         {"key": "X-Content-Type-Options", "value": "nosniff"},
         {"key": "X-Frame-Options", "value": "DENY"},
         {"key": "X-XSS-Protection", "value": "1; mode=block"}
       ]
     }
   ]
   ```

### Domain Configuration

1. **Update Manifest:**
   ```json
   {
     "start_url": "https://yourdomain.com/",
     "scope": "https://yourdomain.com/"
   }
   ```

2. **Update Service Worker:**
   ```javascript
   // Update URLs in sw.js if using absolute paths
   ```

## 📱 PWA Verification

After deployment, verify PWA functionality:

1. **Lighthouse Audit:**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run PWA audit
   - Aim for 100% PWA score

2. **Test Installation:**
   - Desktop: Check for install button in address bar
   - Mobile: Test "Add to Home Screen"

3. **Offline Functionality:**
   - Disconnect internet
   - Verify app still works
   - Check service worker status

## 🔍 Troubleshooting

### Common Issues

**PWA Not Installing:**
- Ensure HTTPS is enabled
- Check manifest.json validity: [Web App Manifest Validator](https://manifest-validator.appspot.com/)
- Verify service worker registration

**Service Worker Not Updating:**
- Increment cache version number
- Clear browser cache
- Check service worker status in DevTools

**Fonts Not Loading:**
- Verify CDN accessibility
- Check CORS headers
- Test with fallback fonts

**Performance Issues:**
- Optimize images
- Minimize CSS/JS
- Enable compression
- Use CDN for static assets

### Debug Tools

1. **Chrome DevTools:**
   - Application tab → Service Workers
   - Application tab → Manifest
   - Lighthouse tab → PWA audit

2. **PWA Builder:**
   - Visit [pwabuilder.com](https://pwabuilder.com)
   - Enter your URL
   - Get PWA recommendations

## 📊 Analytics and Monitoring

### Google Analytics

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring

1. **Core Web Vitals:**
   - Monitor LCP, FID, CLS
   - Use Chrome User Experience Report

2. **Error Tracking:**
   - Implement error boundaries
   - Use services like Sentry

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📈 Post-Deployment

1. **Monitor Performance:**
   - Set up monitoring alerts
   - Track user engagement
   - Monitor error rates

2. **SEO Optimization:**
   - Submit to search engines
   - Add structured data
   - Optimize meta tags

3. **User Feedback:**
   - Add feedback mechanism
   - Monitor user reviews
   - Track feature usage

---

## 🎯 Quick Deploy Commands

**Vercel:**
```bash
npx vercel --prod
```

**Firebase:**
```bash
firebase deploy
```

**Netlify:**
```bash
npx netlify-cli deploy --prod
```

---

**Happy Deploying! 🚀**

*Need help? Create an issue on GitHub or check the troubleshooting section above.* 