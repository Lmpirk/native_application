# Native Application with Playtorch

A native application with an embedded playtorch package for use with CV.
## Installation

```bash
npx expo install
```

## Prerequisites

- Android Studio (with a working emulator with google play in order to emulate the project)

## Emulate

```javascript
npx eas run:android
```
## Potential Errors During Emulation
- Gradle Version: Navigate to android/gradle/wrapper and update distributionUrl to => distributionUrl=https\://services.gradle.org/distributions/gradle-7.6-all.zip.
- Application not getting installed in emulator: Make sure the SDK Version is Google Play Supported.


## Build

```javascript
npx eas build --platform android --profile preview
```

