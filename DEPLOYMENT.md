# Deployment Guide

This guide will help you deploy the Feedback Dashboard to production.

## Prerequisites

1. GitHub account with your code repository
2. MongoDB Atlas account (free tier available)
3. Vercel/Netlify account (for frontend)
4. Render/Railway/Cyclic account (for backend)

## Step 1: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account and cluster
3. Create a database user (remember the username and password)
4. In Network Access, add IP address `0.0.0.0/0` (allows all IPs)
5. Click "Connect" → "Connect your application"
6. Copy the connection string (replace `<password>` with your password)

Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/feedback-dashboard?retryWrites=true&w=majority`

## Step 2: Backend Deployment (Render)

### Option A: Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `feedback-api` (or any name)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: (usually auto-set by Render)
6. Click "Create Web Service"
7. Wait for deployment (takes 2-3 minutes)
8. Copy your backend URL (e.g., `https://feedback-api.onrender.com`)

### Option B: Railway

1. Go to [Railway](https://railway.app/)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Click on the service → "Settings"
5. Set Root Directory to `backend`
6. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
7. Deploy will start automatically
8. Copy your backend URL

### Option C: Cyclic

1. Go to [Cyclic](https://cyclic.sh/)
2. Click "Connect GitHub"
3. Select your repository
4. Set Root Directory to `backend`
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
6. Deploy

## Step 3: Frontend Deployment (Vercel)

### Option A: Vercel (Recommended)

1. Go to [Vercel](https://vercel.com/)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add Environment Variable:
   - `VITE_API_URL`: Your backend URL (e.g., `https://feedback-api.onrender.com`)
6. Click "Deploy"
7. Wait for deployment
8. Copy your frontend URL (e.g., `https://feedback-dashboard.vercel.app`)

### Option B: Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
5. Add Environment Variable:
   - `VITE_API_URL`: Your backend URL
6. Click "Deploy site"

## Step 4: Update Backend CORS (if needed)

If you get CORS errors, update `backend/server.js`:

```javascript
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
```

Or allow all origins (for development/testing):

```javascript
app.use(cors());
```

## Step 5: Testing

1. Visit your frontend URL
2. Submit a test feedback
3. Verify it appears in the table
4. Check analytics cards update
5. Verify backend API endpoints:
   - `https://your-backend.onrender.com/api/feedback`
   - `https://your-backend.onrender.com/api/stats`
   - `https://your-backend.onrender.com/health`

## Troubleshooting

### Backend Issues

1. **MongoDB Connection Error**
   - Verify `MONGODB_URI` environment variable is correct
   - Check MongoDB Atlas IP whitelist includes all IPs (`0.0.0.0/0`)
   - Verify database user credentials

2. **Port Issues**
   - Render/Railway auto-assigns PORT
   - Don't hardcode port, use `process.env.PORT || 5000`

3. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies in `package.json`

### Frontend Issues

1. **API Connection Error**
   - Verify `VITE_API_URL` environment variable is set
   - Check backend URL is accessible
   - Verify CORS is enabled on backend

2. **Build Errors**
   - Check Node.js version (use 16+)
   - Verify all imports are correct
   - Check for typos in component names

3. **Environment Variables Not Working**
   - Vite requires `VITE_` prefix for env vars
   - Redeploy after changing env vars
   - Check build logs for errors

## Environment Variables Summary

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/feedback-dashboard
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend.onrender.com
```

## Quick Commands

### Local Development

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

### Production Build

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run build
# Serve dist/ folder
```

## Support

For issues, check:
1. Build logs on deployment platform
2. Browser console for frontend errors
3. Backend server logs
4. MongoDB Atlas connection status

Good luck with your deployment! 🚀

