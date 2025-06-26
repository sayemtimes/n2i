#!/bin/bash

echo "🚀 Starting Vercel deployment..."

# Clean up first
echo "🧹 Cleaning up..."
rm -rf node_modules
rm -f package-lock.json
rm -f pnpm-lock.yaml
rm -f yarn.lock
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running ESLint..."
npm run lint --fix

# Build project
echo "🏗️ Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
npx vercel --prod

echo "✅ Deployment completed successfully!"
