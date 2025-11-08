# Trust Ledger Demo - Deployment Guide

## 🚀 Deployment Overview

This guide covers deploying the Trust Ledger Demo integration to the YCQ Website, including both the frontend components and backend API server.

---

## 📋 Prerequisites

### **Required Services**
- Node.js 20+ installed
- npm or pnpm package manager
- Vercel account (for frontend deployment)
- Backend hosting (Railway, Heroku, or similar)

### **Environment Access**
- GitHub repository access
- Vercel project access
- Backend server access
- Domain DNS management (optional)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     YCQ Website (Next.js)                    │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  /trust-demo page                                       │ │
│  │  - TrustLedgerDemo component                           │ │
│  │  - Interactive UI                                       │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS/API Calls
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              Trust Ledger API Server (Node.js)              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  trust-ledger-demo.js                                   │ │
│  │  - Express API server                                   │ │
│  │  - In-memory data storage                              │ │
│  │  - Cryptographic receipt generation                     │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Deployment Steps

### **Step 1: Deploy Backend API Server**

#### **Option A: Railway Deployment**

1. **Prepare Backend Code**
   ```bash
   cd SYMBI-SYNERGY
   
   # Ensure trust-ledger-demo.js is ready
   ls -la trust-ledger-demo.js
   ```

2. **Create Railway Project**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login to Railway
   railway login
   
   # Initialize project
   railway init
   ```

3. **Configure Environment**
   ```bash
   # Set environment variables
   railway variables set PORT=5001
   railway variables set NODE_ENV=production
   railway variables set CORS_ORIGINS=https://www.ycq.com,https://ycq.com
   ```

4. **Deploy**
   ```bash
   # Deploy the backend
   railway up
   
   # Get the deployment URL
   railway domain
   # Example output: trust-demo-production.up.railway.app
   ```

#### **Option B: Heroku Deployment**

1. **Create Heroku App**
   ```bash
   heroku create ycq-trust-demo
   ```

2. **Configure Environment**
   ```bash
   heroku config:set PORT=5001
   heroku config:set NODE_ENV=production
   heroku config:set CORS_ORIGINS=https://www.ycq.com,https://ycq.com
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

#### **Option C: Custom Server**

1. **Server Setup**
   ```bash
   # SSH into server
   ssh user@your-server.com
   
   # Clone repository
   git clone https://github.com/s8ken/SYMBI-SYNERGY.git
   cd SYMBI-SYNERGY
   
   # Install dependencies
   npm install
   ```

2. **Configure PM2**
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start server
   pm2 start trust-ledger-demo.js --name trust-demo
   
   # Save PM2 configuration
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name trust-demo.ycq.com;
       
       location / {
           proxy_pass http://localhost:5001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Enable HTTPS**
   ```bash
   # Install Certbot
   sudo apt-get install certbot python3-certbot-nginx
   
   # Get SSL certificate
   sudo certbot --nginx -d trust-demo.ycq.com
   ```

### **Step 2: Deploy Frontend (YCQ Website)**

#### **Update Environment Variables**

1. **Create/Update `.env.local`**
   ```bash
   cd YCQ-Website
   
   # Create environment file
   cat > .env.local << EOF
   NEXT_PUBLIC_SITE_URL=https://www.ycq.com
   NEXT_PUBLIC_CONSOLE_URL=https://symbi-synergy-pa9k82n5m-ycq.vercel.app
   NEXT_PUBLIC_API_URL=https://api.ycq.com
   NEXT_PUBLIC_TRUST_DEMO_API=https://trust-demo.ycq.com/api
   EOF
   ```

2. **Update Vercel Environment Variables**
   ```bash
   # Using Vercel CLI
   vercel env add NEXT_PUBLIC_TRUST_DEMO_API production
   # Enter: https://trust-demo.ycq.com/api
   
   # Or via Vercel Dashboard:
   # Settings → Environment Variables → Add
   ```

#### **Deploy to Vercel**

1. **Via Git Push (Recommended)**
   ```bash
   cd YCQ-Website
   
   # Commit changes
   git add .
   git commit -m "Add trust ledger demo integration"
   
   # Push to main branch
   git push origin main
   
   # Vercel auto-deploys from main branch
   ```

2. **Via Vercel CLI**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Login
   vercel login
   
   # Deploy
   vercel --prod
   ```

3. **Verify Deployment**
   ```bash
   # Check deployment status
   vercel ls
   
   # View logs
   vercel logs
   ```

---

## 🔧 Configuration

### **Backend Configuration**

**File: `trust-ledger-demo.js`**

```javascript
const PORT = process.env.PORT || 5001;
const CORS_ORIGINS = process.env.CORS_ORIGINS?.split(',') || [
  'https://www.ycq.com',
  'https://ycq.com'
];

app.use(cors({
  origin: CORS_ORIGINS,
  credentials: true
}));
```

### **Frontend Configuration**

**File: `src/lib/site.ts`**

```typescript
export const TRUST_DEMO_API = 
  process.env.NEXT_PUBLIC_TRUST_DEMO_API || 
  "https://trust-demo.ycq.com/api";
```

---

## ✅ Post-Deployment Verification

### **1. Backend Health Check**

```bash
# Test backend API
curl https://trust-demo.ycq.com/api/health

# Expected response:
{
  "status": "healthy",
  "service": "SYMBI Trust Ledger Demo",
  "timestamp": "2024-11-08T...",
  "receipts": 0,
  "declarations": 3
}
```

### **2. Frontend Verification**

```bash
# Visit trust demo page
open https://www.ycq.com/trust-demo

# Check console for errors
# Verify API calls succeed
# Test all interactive features
```

### **3. End-to-End Testing**

```bash
# Test analytics loading
curl https://trust-demo.ycq.com/api/trust/analytics

# Test trust declaration creation
curl -X POST https://trust-demo.ycq.com/api/trust \
  -H "Content-Type: application/json" \
  -d '{
    "agentId": "test-agent",
    "agentName": "Test Agent",
    "trustArticles": {
      "inspection_mandate": true,
      "consent_architecture": true,
      "ethical_override": true,
      "continuous_validation": true,
      "right_to_disconnect": true,
      "moral_recognition": true
    }
  }'

# Test AI generation
curl -X POST https://trust-demo.ycq.com/api/llm/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Test prompt",
    "provider": "anthropic",
    "includeReceipt": true
  }'
```

---

## 🔒 Security Checklist

- [ ] HTTPS enabled on both frontend and backend
- [ ] CORS configured with production domains only
- [ ] Rate limiting active and tested
- [ ] Environment variables set correctly
- [ ] Demo credentials working
- [ ] Data purging scheduled (24h)
- [ ] Monitoring and logging enabled
- [ ] Error handling tested
- [ ] Security headers configured
- [ ] API endpoints protected

---

## 📊 Monitoring Setup

### **Backend Monitoring**

```javascript
// Add to trust-ledger-demo.js
const metrics = {
  requests: 0,
  errors: 0,
  receipts: 0,
  declarations: 0
};

app.use((req, res, next) => {
  metrics.requests++;
  next();
});

app.get('/api/metrics', (req, res) => {
  res.json(metrics);
});
```

### **Frontend Monitoring**

```typescript
// Add to TrustLedgerDemo.tsx
useEffect(() => {
  // Track component usage
  analytics.track('trust_demo_viewed');
}, []);

const handleAction = (action: string) => {
  analytics.track('trust_demo_action', { action });
};
```

---

## 🐛 Troubleshooting

### **Common Issues**

#### **1. CORS Errors**
```
Error: Access to fetch blocked by CORS policy
```

**Solution:**
```bash
# Update backend CORS configuration
CORS_ORIGINS=https://www.ycq.com,https://ycq.com

# Restart backend server
pm2 restart trust-demo
```

#### **2. API Connection Failed**
```
Error: Failed to fetch
```

**Solution:**
```bash
# Check backend is running
curl https://trust-demo.ycq.com/api/health

# Verify environment variable
echo $NEXT_PUBLIC_TRUST_DEMO_API

# Check network connectivity
ping trust-demo.ycq.com
```

#### **3. Rate Limit Exceeded**
```
Error: Too many requests
```

**Solution:**
```bash
# Wait 15 minutes for rate limit reset
# Or adjust rate limit configuration
```

---

## 🔄 Update Procedure

### **Backend Updates**

```bash
# Pull latest changes
cd SYMBI-SYNERGY
git pull origin main

# Restart server
pm2 restart trust-demo

# Verify deployment
curl https://trust-demo.ycq.com/api/health
```

### **Frontend Updates**

```bash
# Pull latest changes
cd YCQ-Website
git pull origin main

# Deploy to Vercel
vercel --prod

# Verify deployment
open https://www.ycq.com/trust-demo
```

---

## 📈 Performance Optimization

### **Backend Optimization**

```javascript
// Enable compression
const compression = require('compression');
app.use(compression());

// Cache static responses
app.use((req, res, next) => {
  if (req.path === '/api/health') {
    res.set('Cache-Control', 'public, max-age=60');
  }
  next();
});
```

### **Frontend Optimization**

```typescript
// Lazy load demo component
const TrustLedgerDemo = dynamic(
  () => import('@/components/TrustLedgerDemo'),
  { loading: () => <LoadingSpinner /> }
);
```

---

## 📞 Support

**Technical Issues**: tech@ycq.com  
**Deployment Help**: devops@ycq.com  
**Security Concerns**: security@ycq.com

---

**Last Updated**: November 8, 2024  
**Version**: 1.0.0  
**Maintainer**: YCQ DevOps Team