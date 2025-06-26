#!/bin/bash

# Islamic Dawah Platform - iOS Deployment Script

set -e

echo "🚀 Starting iOS deployment for Islamic Dawah Platform..."

# Check if required environment variables are set
if [ -z "$APPLE_ID" ]; then
    echo "❌ Error: APPLE_ID environment variable is not set"
    exit 1
fi

if [ -z "$APPLE_APP_SPECIFIC_PASSWORD" ]; then
    echo "❌ Error: APPLE_APP_SPECIFIC_PASSWORD environment variable is not set"
    exit 1
fi

if [ -z "$APPLE_TEAM_ID" ]; then
    echo "❌ Error: APPLE_TEAM_ID environment variable is not set"
    exit 1
fi

# Setup environment
echo "📱 Setting up iOS build environment..."
npm install -g @expo/cli eas-cli

# Login to Expo
echo "🔐 Logging into Expo..."
echo "$EXPO_TOKEN" | eas login --non-interactive

# Build iOS IPA
echo "🔨 Building iOS IPA..."
eas build --platform ios --profile production --non-interactive

# Submit to App Store
echo "📤 Submitting to App Store..."
eas submit --platform ios --profile production --non-interactive

# Upload metadata using fastlane
echo "📋 Uploading App Store metadata..."
fastlane deliver \
    --app_identifier "com.islamicdawah.platform" \
    --username "$APPLE_ID" \
    --team_id "$APPLE_TEAM_ID" \
    --metadata_path "store-metadata/app-store" \
    --skip_binary_upload \
    --force

echo "✅ iOS deployment completed successfully!"
echo "📱 App submitted to App Store for review"
echo "🔗 Check status at: https://appstoreconnect.apple.com"

echo "🎉 Islamic Dawah Platform iOS app is now submitted for review!"
