# 📱 Islamic Dawah Platform - Mobile App Deployment Guide

## 🚀 App Store Deployment Overview

This guide covers the complete deployment process for both Google Play Store and Apple App Store.

### 📋 Prerequisites

#### Required Accounts
- ✅ **Google Play Console** account ($25 one-time fee)
- ✅ **Apple Developer Program** account ($99/year)
- ✅ **Expo Account** (free)

#### Required Tools
- ✅ **Node.js** 18+ installed
- ✅ **Expo CLI** installed globally
- ✅ **EAS CLI** installed globally
- ✅ **Fastlane** (optional, for metadata management)

### 🔧 Setup Instructions

#### 1. Environment Variables Setup

Create a `.env` file with the following variables:

\`\`\`bash
# Expo Configuration
EXPO_TOKEN=your_expo_access_token

# Android Configuration
GOOGLE_SERVICE_ACCOUNT_JSON=path_to_service_account.json
ANDROID_KEYSTORE_PASSWORD=your_keystore_password
MYAPP_UPLOAD_STORE_FILE=path_to_upload_keystore.jks
MYAPP_UPLOAD_STORE_PASSWORD=your_store_password
MYAPP_UPLOAD_KEY_ALIAS=your_key_alias
MYAPP_UPLOAD_KEY_PASSWORD=your_key_password

# iOS Configuration
APPLE_ID=your_apple_id@example.com
APPLE_APP_SPECIFIC_PASSWORD=your_app_specific_password
APPLE_TEAM_ID=your_apple_team_id
ASC_APP_ID=your_app_store_connect_app_id
\`\`\`

#### 2. Google Play Store Setup

1. **Create Google Play Console Account**
   - Visit [Google Play Console](https://play.google.com/console)
   - Pay $25 registration fee
   - Complete developer profile

2. **Create App in Console**
   - Click "Create app"
   - App name: "Islamic Dawah Platform"
   - Package name: `com.islamicdawah.platform`
   - Category: Education

3. **Generate Service Account**
   \`\`\`bash
   # Go to Google Cloud Console
   # Create service account
   # Download JSON key file
   # Grant Play Console access
   \`\`\`

4. **Create Upload Keystore**
   \`\`\`bash
   keytool -genkeypair -v -storetype PKCS12 \
     -keystore upload-keystore.jks \
     -alias upload \
     -keyalg RSA \
     -keysize 2048 \
     -validity 10000
   \`\`\`

#### 3. Apple App Store Setup

1. **Apple Developer Account**
   - Join [Apple Developer Program](https://developer.apple.com/programs/)
   - Pay $99 annual fee

2. **App Store Connect Setup**
   - Create new app in [App Store Connect](https://appstoreconnect.apple.com)
   - Bundle ID: `com.islamicdawah.platform`
   - App name: "Islamic Dawah Platform"

3. **Certificates & Provisioning**
   \`\`\`bash
   # EAS will handle certificates automatically
   eas credentials
   \`\`\`

### 🔨 Build Process

#### Android Build & Deploy

\`\`\`bash
# Build Android App Bundle
npm run build:android

# Submit to Google Play Store
npm run submit:android

# Or use the deployment script
npm run deploy:android
\`\`\`

#### iOS Build & Deploy

\`\`\`bash
# Build iOS IPA
npm run build:ios

# Submit to App Store
npm run submit:ios

# Or use the deployment script
npm run deploy:ios
\`\`\`

#### Deploy Both Platforms

\`\`\`bash
# Build and deploy both platforms
npm run deploy:all
\`\`\`

### 📱 Store Listing Optimization

#### Google Play Store

**Title:** Islamic Dawah Platform - Complete Islamic Lifestyle

**Short Description:** Transform your Islamic lifestyle with comprehensive 4-month guided program, prayer times, Quran, and Hadith.

**Key Features:**
- 🕌 Complete Islamic education program
- 📖 Quran with Bengali translation
- 🤲 Daily prayers and supplications
- 📅 Islamic calendar and prayer times
- 🎯 AI-powered Islamic guidance
- 📱 Offline content access

#### Apple App Store

**App Name:** Islamic Dawah Platform

**Subtitle:** Complete Islamic Lifestyle Guide

**Keywords:** Islam,Quran,Hadith,Prayer,Islamic Education,Bengali,Muslim,Dawah,Prayer Times

### 🎨 App Store Assets

#### Required Screenshots
- **Phone Screenshots:** 6.7", 6.5", 5.5" displays
- **Tablet Screenshots:** 12.9", 11" iPad Pro
- **Feature Graphic:** 1024x500px (Google Play)
- **App Icon:** 1024x1024px

#### Asset Specifications
\`\`\`
📱 Phone Screenshots (Portrait):
- iPhone 14 Pro Max: 1290x2796px
- iPhone 14 Pro: 1179x2556px
- iPhone 8 Plus: 1242x2208px

📱 Tablet Screenshots:
- iPad Pro 12.9": 2048x2732px
- iPad Pro 11": 1668x2388px

🎨 Graphics:
- App Icon: 1024x1024px (PNG)
- Feature Graphic: 1024x500px (JPG/PNG)
- Promo Video: MP4, max 30MB
\`\`\`

### 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:

1. **Builds** the app for both platforms
2. **Tests** the build integrity
3. **Submits** to respective stores
4. **Updates** metadata and assets
5. **Notifies** team of deployment status

### 📊 Release Management

#### Version Management
\`\`\`json
{
  "version": "1.0.0",
  "android": {
    "versionCode": 1
  },
  "ios": {
    "buildNumber": "1"
  }
}
\`\`\`

#### Release Tracks
- **Internal Testing:** Team testing
- **Alpha:** Closed testing (100 users)
- **Beta:** Open testing (unlimited)
- **Production:** Public release

### 🛡️ Security & Privacy

#### Privacy Policy Requirements
- ✅ Data collection practices
- ✅ Location usage (prayer times)
- ✅ Camera usage (QR scanning)
- ✅ Notification permissions
- ✅ Offline data storage

#### Security Measures
- ✅ Code obfuscation enabled
- ✅ Certificate pinning
- ✅ Secure API communication
- ✅ Local data encryption

### 📈 Post-Launch Monitoring

#### Analytics Setup
- **Firebase Analytics** for user behavior
- **Crashlytics** for crash reporting
- **Performance Monitoring** for app performance
- **Remote Config** for feature flags

#### App Store Optimization (ASO)
- Monitor keyword rankings
- Track download metrics
- Analyze user reviews
- Update screenshots regularly

### 🆘 Troubleshooting

#### Common Issues

**Build Failures:**
\`\`\`bash
# Clear Expo cache
expo r -c

# Reset EAS build
eas build:configure
\`\`\`

**Certificate Issues:**
\`\`\`bash
# Reset iOS credentials
eas credentials --platform ios --clear-all

# Regenerate certificates
eas credentials
\`\`\`

**Submission Errors:**
- Check app metadata compliance
- Verify privacy policy links
- Ensure all required screenshots uploaded
- Review app content guidelines

### 📞 Support & Resources

- **Expo Documentation:** https://docs.expo.dev/
- **Google Play Console Help:** https://support.google.com/googleplay/android-developer/
- **App Store Connect Help:** https://developer.apple.com/support/app-store-connect/
- **Islamic Dawah Platform Support:** support@islamicdawah.com

---

## 🎉 Deployment Checklist

- [ ] Environment variables configured
- [ ] Store accounts created and verified
- [ ] App metadata and assets prepared
- [ ] Privacy policy and terms published
- [ ] Build and submission scripts tested
- [ ] CI/CD pipeline configured
- [ ] Analytics and monitoring setup
- [ ] Beta testing completed
- [ ] Final review and approval

**Ready to launch! 🚀**
