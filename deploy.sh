#!/bin/bash

echo "🚀 TechBlog Deployment Script"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Run 'git init' first."
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes."
    read -p "Do you want to commit them? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        git commit -m "Deploy: $(date)"
    else
        echo "❌ Please commit or stash your changes before deploying."
        exit 1
    fi
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo "🚀 Deploying to Vercel..."
    vercel --prod --yes
elif command -v netlify &> /dev/null; then
    echo "🚀 Deploying to Netlify..."
    netlify deploy --prod --dir=.next
else
    echo "📋 Manual deployment required."
    echo ""
    echo "Choose your deployment method:"
    echo "1. Push to GitHub and deploy via Vercel Dashboard"
    echo "2. Push to GitHub and deploy via Netlify Dashboard"
    echo "3. Install Vercel CLI: npm install -g vercel"
    echo "4. Install Netlify CLI: npm install -g netlify-cli"
    echo ""
    echo "See DEPLOYMENT.md for detailed instructions."
fi

echo "🎉 Deployment complete!"

