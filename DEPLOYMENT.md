# Deployment Guide

## Pre-deployment Checklist

### 1. Code Quality
- ✅ All TypeScript errors resolved
- ✅ ESLint warnings addressed
- ✅ Build process successful
- ✅ All pages load correctly
- ✅ Mobile responsiveness tested

### 2. Performance
- ✅ Images optimized
- ✅ Fonts preloaded
- ✅ Bundle size optimized
- ✅ Core Web Vitals checked

### 3. SEO & Accessibility
- ✅ Meta tags configured
- ✅ Alt text for images
- ✅ Semantic HTML structure
- ✅ ARIA labels added
- ✅ Keyboard navigation tested

### 4. Content
- ✅ All Bengali text properly displayed
- ✅ Arabic text rendering correctly
- ✅ Blog posts complete
- ✅ Contact information updated

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   \`\`\`bash
   # Push to GitHub first
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   \`\`\`

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Update DNS records
   - Enable HTTPS

### Option 2: Netlify

1. **Build Settings**
   \`\`\`
   Build command: npm run build
   Publish directory: out
   \`\`\`

2. **Environment Variables**
   - Set in Netlify dashboard
   - Copy from .env.example

### Option 3: Self-hosted

1. **Build for Production**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

2. **Using PM2**
   \`\`\`bash
   npm install -g pm2
   pm2 start npm --name "islamic-platform" -- start
   \`\`\`

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

## Environment Variables

\`\`\`bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="ইলম থেকে ইখলাস"

# Optional
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
CONTACT_EMAIL=info@ilmtoikhlas.com
\`\`\`

## Post-deployment

1. **Test All Features**
   - Navigation works
   - Blog posts load
   - AI assistant responds
   - Contact form submits
   - Mobile experience

2. **Monitor Performance**
   - Google PageSpeed Insights
   - Core Web Vitals
   - Error tracking

3. **SEO Setup**
   - Google Search Console
   - Sitemap submission
   - Analytics setup

## Maintenance

- Regular dependency updates
- Content updates
- Performance monitoring
- Security patches
- Backup strategy

## Support

For deployment issues, contact: info@ilmtoikhlas.com
