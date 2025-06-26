#!/bin/bash

echo "🚀 Deploying Islamic Dawah Platform to Vercel..."

# Clean up any problematic files
echo "🧹 Cleaning up..."
rm -f pnpm-lock.yaml
rm -f yarn.lock

# Ensure we're using npm
echo "📦 Setting up npm..."
export npm_config_user_agent="npm"

# Install dependencies
echo "📥 Installing dependencies..."
npm install

# Build locally to check for errors
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful! Deploying to Vercel..."
    
    # Deploy to Vercel
    npx vercel --prod --confirm
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🌐 Your Islamic Dawah Platform is now live!"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
