#!/bin/bash

# Portfolio Dashboard - Vercel Deployment Script
# This script helps you deploy your app to Vercel

echo "🚀 Portfolio Dashboard - Vercel Deployment Helper"
echo "=================================================="
echo ""

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the /app/frontend directory"
    echo "   cd /app/frontend && bash deploy-to-vercel.sh"
    exit 1
fi

echo "✅ Confirmed: You're in the frontend directory"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
    echo "✅ Dependencies installed"
    echo ""
fi

# Test the build
echo "🔨 Testing production build..."
if yarn build; then
    echo "✅ Build successful!"
    echo ""
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo "✨ Your app is ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo ""
echo "Option 1: Deploy via Vercel Dashboard (Recommended)"
echo "  1. Push your code to GitHub"
echo "  2. Go to https://vercel.com/new"
echo "  3. Import your repository"
echo "  4. Click Deploy"
echo ""
echo "Option 2: Deploy via Vercel CLI"
echo "  1. Install CLI: npm install -g vercel"
echo "  2. Login: vercel login"
echo "  3. Deploy: vercel --prod"
echo ""
echo "📖 For detailed instructions, see:"
echo "   - VERCEL_QUICK_START.md (quick guide)"
echo "   - VERCEL_DEPLOYMENT.md (detailed guide)"
echo "   - DEPLOYMENT_CHECKLIST.md (step-by-step)"
echo ""
echo "🎉 Good luck with your deployment!"
