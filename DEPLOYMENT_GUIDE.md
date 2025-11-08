# Trust Ledger Demo - Deployment Guide

## Overview
This guide covers deploying the YCQ Website with the integrated Trust Ledger Demo to production at **yseeku.com/trust-demo**.

## Architecture

### Frontend (YCQ Website)
- **Framework**: Next.js 15.5.2
- **Hosting**: Vercel (recommended) or any Node.js hosting
- **Domain**: yseeku.com
- **Demo URL**: yseeku.com/trust-demo

### Backend (Trust Ledger API)
- **Runtime**: Node.js
- **Current Endpoint**: https://5001-93f6dde3-aaae-4b3e-ae57-a7d3bd733547.proxy.daytona.works/api
- **Recommended Hosting**: Railway, Heroku, or DigitalOcean App Platform

---

## Step 1: Deploy Backend API

### Option A: Railway (Recommended)

1. **Create Railway Account**: https://railway.app
2. **Create New Project**: Click "New Project" → "Deploy from GitHub repo"
3. **Select Repository**: Choose `s8ken/SYMBI-SYNERGY`
4. **Configure Service**:
   - Root Directory: `/`
   - Start Command: `node trust-ledger-demo.js`
   - Port: `5001`
5. **Add Environment Variables**:
   ```
   PORT=5001
   NODE_ENV=production
   ```
6. **Deploy**: Railway will automatically deploy
7. **Get Public URL**: Copy the generated Railway URL (e.g., `https://your-app.railway.app`)

### Option B: Heroku

1. **Install Heroku CLI**: https://devcenter.heroku.com/articles/heroku-cli
2. **Login**: `heroku login`
3. **Create App**:
   ```bash
   cd /path/to/SYMBI-SYNERGY
   heroku create ycq-trust-ledger-api
   ```
4. **Add Procfile**:
   ```
   web: node trust-ledger-demo.js
   ```
5. **Deploy**:
   ```bash
   git push heroku main
   ```
6. **Get URL**: `https://ycq-trust-ledger-api.herokuapp.com`

### Option C: DigitalOcean App Platform

1. **Create Account**: https://www.digitalocean.com
2. **Create App**: Apps → Create App → GitHub
3. **Select Repository**: `s8ken/SYMBI-SYNERGY`
4. **Configure**:
   - Type: Web Service
   - Run Command: `node trust-ledger-demo.js`
   - HTTP Port: `5001`
5. **Deploy**: DigitalOcean will build and deploy
6. **Get URL**: Copy the app URL

---

## Step 2: Update Frontend Configuration

Once you have the backend API URL, update the frontend configuration:

### Update Environment Variable

1. **Edit `src/lib/site.ts`**:
   ```typescript
   export const TRUST_DEMO_API = process.env.NEXT_PUBLIC_TRUST_DEMO_API || "https://YOUR-BACKEND-URL/api";
   ```

2. **Or set environment variable in Vercel**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_TRUST_DEMO_API` = `https://YOUR-BACKEND-URL/api`

---

## Step 3: Deploy Frontend to Vercel

### Automatic Deployment (Recommended)

1. **Connect GitHub to Vercel**:
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import `s8ken/YCQ-Website` repository

2. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Add Environment Variables**:
   ```
   NEXT_PUBLIC_TRUST_DEMO_API=https://YOUR-BACKEND-URL/api
   NEXT_PUBLIC_SITE_URL=https://yseeku.com
   ```

4. **Deploy**: Vercel will automatically deploy on every push to main

### Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd YCQ-Website
vercel --prod
```

---

## Step 4: Configure Custom Domain

### Add yseeku.com to Vercel

1. **Go to Vercel Dashboard** → Your Project → Settings → Domains
2. **Add Domain**: Enter `yseeku.com` and `www.yseeku.com`
3. **Configure DNS**:
   - Add A record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`
4. **Verify**: Vercel will automatically verify and issue SSL certificate

### Update DNS Records

In your domain registrar (e.g., Namecheap, GoDaddy):

```
Type    Name    Value                   TTL
A       @       76.76.21.21            Automatic
CNAME   www     cname.vercel-dns.com   Automatic
```

---

## Step 5: Merge Pull Request

Once backend and frontend are configured:

1. **Review PR #7**: https://github.com/s8ken/YCQ-Website/pull/7
2. **Merge to Main**: This will trigger automatic deployment on Vercel
3. **Verify Deployment**: Check https://yseeku.com/trust-demo

---

## Step 6: Verify Deployment

### Test Backend API

```bash
# Health check
curl https://YOUR-BACKEND-URL/api/health

# Analytics
curl https://YOUR-BACKEND-URL/api/trust/analytics

# Login
curl -X POST https://YOUR-BACKEND-URL/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@symbi-trust.com","password":"demo123"}'
```

### Test Frontend

1. **Visit**: https://yseeku.com/trust-demo
2. **Check Demo Credentials Banner**: Should display demo credentials
3. **Test Tabs**:
   - Analytics: Should show trust metrics
   - Create Declaration: Should allow creating declarations
   - AI + Receipt: Should generate AI responses with receipts
   - Verify Receipt: Should verify event IDs

### Test Integration

1. **Generate AI Response**: Use the "AI + Receipt" tab
2. **Copy Event ID**: From the generated receipt
3. **Verify Receipt**: Paste Event ID in "Verify Receipt" tab
4. **Check Results**: Should show verification details

---

## Environment Variables Reference

### Backend (Trust Ledger API)
```bash
PORT=5001
NODE_ENV=production
```

### Frontend (YCQ Website)
```bash
NEXT_PUBLIC_TRUST_DEMO_API=https://YOUR-BACKEND-URL/api
NEXT_PUBLIC_SITE_URL=https://yseeku.com
NEXT_PUBLIC_CONSOLE_URL=https://console.yseeku.com
NEXT_PUBLIC_API_URL=https://api.yseeku.com
```

---

## Security Checklist

- [ ] Backend API deployed with HTTPS
- [ ] Rate limiting enabled (50 requests per 15 minutes)
- [ ] CORS configured for yseeku.com domain
- [ ] Demo credentials displayed on frontend
- [ ] Data purging enabled (24 hours)
- [ ] No sensitive data in environment variables
- [ ] SSL certificate active on custom domain
- [ ] Security headers configured

---

## Monitoring & Maintenance

### Backend Monitoring
- Check Railway/Heroku logs for errors
- Monitor API response times
- Track rate limit violations
- Review security events

### Frontend Monitoring
- Use Vercel Analytics for page views
- Monitor Core Web Vitals
- Track demo usage patterns
- Review error logs

### Regular Maintenance
- Update dependencies monthly
- Review and rotate demo credentials quarterly
- Monitor API usage and adjust rate limits
- Backup trust declarations weekly

---

## Troubleshooting

### Issue: Demo page shows "API connection failed"
**Solution**: Check backend API is running and NEXT_PUBLIC_TRUST_DEMO_API is correct

### Issue: CORS errors in browser console
**Solution**: Add yseeku.com to backend CORS whitelist

### Issue: Rate limit errors
**Solution**: Increase rate limit or implement user-specific limits

### Issue: SSL certificate errors
**Solution**: Verify DNS records and wait for Vercel to issue certificate

---

## Support

For deployment issues:
- Backend: Check SYMBI-SYNERGY repository issues
- Frontend: Check YCQ-Website repository issues
- Vercel: https://vercel.com/support
- Railway: https://railway.app/help

---

## Quick Reference

### Current Status
- **Backend API**: https://5001-93f6dde3-aaae-4b3e-ae57-a7d3bd733547.proxy.daytona.works/api
- **Frontend PR**: #7 (Ready to merge)
- **Target Domain**: yseeku.com/trust-demo

### Next Steps
1. Deploy backend to Railway/Heroku
2. Update NEXT_PUBLIC_TRUST_DEMO_API with production URL
3. Merge PR #7 to main branch
4. Configure yseeku.com domain in Vercel
5. Verify deployment at yseeku.com/trust-demo

---

**Deployment Complete!** 🚀

Your Trust Ledger Demo will be live at **https://yseeku.com/trust-demo**