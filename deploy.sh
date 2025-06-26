#!/bin/bash

echo "🚀 Starting Islamic Dawah Platform Deployment..."

# Check if we're using the right package manager
echo "📦 Checking package manager..."

# Force use of npm instead of pnpm
export npm_config_user_agent="npm"

# Clean up any existing lock files
echo "🧹 Cleaning up lock files..."
rm -f pnpm-lock.yaml
rm -f yarn.lock

# Install dependencies
echo "📥 Installing dependencies..."
npm install

# Build the project
echo "🏗️ Building project..."
npm run build

# Deploy based on platform
if [ "$1" = "vercel" ]; then
    echo "🌐 Deploying to Vercel..."
    npx vercel --prod
elif [ "$1" = "mobile" ]; then
    echo "📱 Deploying mobile apps..."
    npm run deploy:all
else
    echo "✅ Build completed successfully!"
    echo "Run './deploy.sh vercel' to deploy to web"
    echo "Run './deploy.sh mobile' to deploy mobile apps"
fi

echo "🎉 Deployment process completed!"
