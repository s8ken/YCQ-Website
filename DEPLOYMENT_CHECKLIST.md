# Trust Ledger Demo - Deployment Checklist

## Pre-Deployment
- [x] Backend API running locally
- [x] Frontend built successfully
- [x] Pull Request #7 created and ready
- [x] Integration tested locally
- [x] Documentation complete

## Backend Deployment
- [ ] Choose hosting platform (Railway/Heroku/DigitalOcean)
- [ ] Deploy trust-ledger-demo.js
- [ ] Configure environment variables (PORT=5001, NODE_ENV=production)
- [ ] Verify API health endpoint
- [ ] Test authentication endpoint
- [ ] Copy production API URL

## Frontend Configuration
- [ ] Update NEXT_PUBLIC_TRUST_DEMO_API with production URL
- [ ] Commit configuration changes
- [ ] Push to feature branch
- [ ] Merge PR #7 to main

## Vercel Deployment
- [ ] Connect GitHub repository to Vercel
- [ ] Configure build settings (Next.js preset)
- [ ] Add environment variables
- [ ] Deploy to production
- [ ] Verify deployment URL

## Domain Configuration
- [ ] Add yseeku.com to Vercel project
- [ ] Configure DNS A record (@ → 76.76.21.21)
- [ ] Configure DNS CNAME (www → cname.vercel-dns.com)
- [ ] Wait for SSL certificate
- [ ] Verify HTTPS works

## Testing
- [ ] Visit https://yseeku.com/trust-demo
- [ ] Verify demo credentials banner displays
- [ ] Test Analytics tab (trust metrics load)
- [ ] Test Create Declaration tab (form works)
- [ ] Test AI + Receipt tab (generates responses)
- [ ] Test Verify Receipt tab (verifies event IDs)
- [ ] Test end-to-end flow (generate → verify)
- [ ] Test on mobile devices
- [ ] Test in different browsers

## Security Verification
- [ ] HTTPS enabled on both frontend and backend
- [ ] Rate limiting active (test with multiple requests)
- [ ] CORS configured for yseeku.com
- [ ] Demo credentials publicly visible
- [ ] No sensitive data exposed
- [ ] Data purging scheduled (24 hours)

## Post-Deployment
- [ ] Monitor backend logs for errors
- [ ] Check Vercel analytics for traffic
- [ ] Test demo with real users
- [ ] Document any issues
- [ ] Set up monitoring alerts

## Current Status

### ✅ Completed
- Backend API running at: https://5001-93f6dde3-aaae-4b3e-ae57-a7d3bd733547.proxy.daytona.works/api
- Frontend PR #7 ready to merge
- All documentation created
- Integration tested

### 🔄 In Progress
- Backend deployment to production hosting
- Frontend deployment to Vercel
- Domain configuration

### ⏳ Pending
- Production backend URL
- Merge PR #7
- Configure yseeku.com domain
- Final verification

## Quick Commands

### Test Backend API
```bash
# Health check
curl https://YOUR-BACKEND-URL/api/health

# Analytics
curl https://YOUR-BACKEND-URL/api/trust/analytics

# Login
curl -X POST https://YOUR-BACKEND-URL/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@sonate-trust.com","password":"demo123"}'
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd YCQ-Website
vercel --prod
```

### Update Environment Variable
```bash
# In Vercel Dashboard
NEXT_PUBLIC_TRUST_DEMO_API=https://YOUR-BACKEND-URL/api
```

## Notes
- Current backend URL is temporary (Daytona proxy)
- Need to deploy to permanent hosting (Railway/Heroku)
- PR #7 is ready to merge once backend is deployed
- Domain yseeku.com needs to be configured in Vercel