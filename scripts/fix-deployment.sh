#!/bin/bash

echo "🔧 Fixing deployment issues..."

# Remove all lock files
echo "📦 Cleaning lock files..."
rm -f package-lock.json
rm -f pnpm-lock.yaml  
rm -f yarn.lock

# Remove node_modules
echo "🗑️ Cleaning node_modules..."
rm -rf node_modules

# Clear npm cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Install with npm (more stable for deployment)
echo "📥 Installing dependencies with npm..."
npm install

# Verify installation
echo "✅ Verifying installation..."
npm list --depth=0

# Build the project
echo "🏗️ Building project..."
npm run build

echo "✅ Deployment fix completed!"
