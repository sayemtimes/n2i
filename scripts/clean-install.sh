#!/bin/bash

echo "🧹 Cleaning up old dependencies..."

# Remove all lock files and node_modules
rm -rf node_modules
rm -f package-lock.json
rm -f pnpm-lock.yaml
rm -f yarn.lock
rm -rf .next

echo "📦 Installing fresh dependencies..."

# Install with npm
npm install

echo "🔍 Checking for vulnerabilities..."

# Audit and fix
npm audit fix --force

echo "🏗️ Building project..."

# Build the project
npm run build

echo "✅ Clean install completed successfully!"
