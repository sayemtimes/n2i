#!/bin/bash

# Islamic Dawah Platform - Android Deployment Script

set -e

echo "🚀 Starting Android deployment for Islamic Dawah Platform..."

# Check if required environment variables are set
if [ -z "$GOOGLE_SERVICE_ACCOUNT_JSON" ]; then
    echo "❌ Error: GOOGLE_SERVICE_ACCOUNT_JSON environment variable is not set"
    exit 1
fi

if [ -z "$ANDROID_KEYSTORE_PASSWORD" ]; then
    echo "❌ Error: ANDROID_KEYSTORE_PASSWORD environment variable is not set"
    exit 1
fi

# Setup environment
echo "📱 Setting up Android build environment..."
npm install -g @expo/cli eas-cli

# Login to Expo
echo "🔐 Logging into Expo..."
echo "$EXPO_TOKEN" | eas login --non-interactive

# Create Google Service Account file
echo "📝 Creating Google Service Account file..."
echo "$GOOGLE_SERVICE_ACCOUNT_JSON" > google-service-account.json

# Build Android App Bundle (AAB)
echo "🔨 Building Android App Bundle..."
eas build --platform android --profile production --non-interactive

# Submit to Google Play Store
echo "📤 Submitting to Google Play Store..."
eas submit --platform android --profile production --non-interactive

# Upload metadata and assets
echo "📋 Uploading store metadata..."
fastlane supply \
    --package_name "com.islamicdawah.platform" \
    --json_key "google-service-account.json" \
    --metadata_path "store-metadata/google-play" \
    --track "internal" \
    --skip_upload_apk \
    --skip_upload_aab

echo "✅ Android deployment completed successfully!"
echo "📱 App submitted to Google Play Store internal testing track"
echo "🔗 Check status at: https://play.google.com/console"

# Cleanup
rm -f google-service-account.json

echo "🎉 Islamic Dawah Platform Android app is now live!"
