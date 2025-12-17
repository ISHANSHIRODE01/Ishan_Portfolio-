# Deployment Guide

## 🚀 Vercel Deployment (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

## 📊 Performance Features

- Images optimized with Next.js Image component
- Service worker enabled for caching
- Code splitting implemented
- SEO meta tags configured