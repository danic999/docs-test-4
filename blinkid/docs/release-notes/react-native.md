---
title: "React Native"
sidebar_position: 6
description: "React Native release notes"
---
<div className='release-notes'>
*October 23, 2024*

## v6.11.1

- We have updated the plugin to [Android SDK v6.11.2](https://github.com/BlinkID/blinkid-android/releases/tag/v6.11.2) and [iOS SDK v6.11.1](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.11.1)

**Bug fixes**

- NYC Municipal ID & USA Border Crossing Card 
    - Resolved an issue where the scanning process could get stuck on the back side during multi-side scanning.


*October 14, 2024*

## v6.11.0

- We have updated the plugin to [Android SDK v6.11.1](https://github.com/BlinkID/blinkid-android/releases/tag/v6.11.1) and [iOS SDK v6.11.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.11.0)

**Expanded document coverage**

- All of the new documents & document versions can also be found in the release notes for native Android and iOS SDKs.

**New features**

- **Greek Alphabet Support**
    - Added support for extracting `Place of Birth` in both Greek and Latin scripts.
- New result fields in the `BlinkIdSingleSideRecognizer` and `BlinkIdMultiSideRecognizer`
    - `manufacturingYear`, `vehicleType`, `eligibilityCategory`, `specificDocumentValidity`, `dependentsInfo`

**Bug fixes**

- Android specific
    - Removed unused `libc++_shared.so` from the SDK
    - Fix for duplicate attrs resource: `attr/mb_onboardingImageColor` when combining multiple Microblink's SDKs in the same app
    - Raised `minSdkVersion` to 23 to support React-Native v0.75

*September 13, 2024*

## v6.10.0

- We have updated the plugin to [Android SDK v6.10.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.10.0) and [iOS SDK v6.10.1](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.10.1)

**Expanded document coverage**

- All of the new documents & document versions can also be found in the release notes for native Android and iOS SDKs.

**New features**

- ***Avoiding Double Scans of the Front Side***: For a more reliable scanning process, BlinkID now prompts users to flip the document when they scan the front side twice. This improves the overall experience and reduces the chance of mistakes.
- ***Starting with the Right Side***: If users attempt to scan the back side of a document first, BlinkID will prompt them to begin with the front side. This feature ensures that users follow the correct order, leading to a more reliable and user-friendly experience.
- Added `imageExtractionFailures` to `AdditionalProcessingInfo`
    - `imageExtractionFailures` allows tracking if any images are not visible on the presented document
    - Added  `ImageExtractionType` (`FullDocument`, `Face`, `Signature`) enum to specify the image type
- Added a new result member, `barcodeStepUsed` to BlinkID recognizers, which indicates whether the barcode scanning step was utilized during the scanning process.
- Added two new settings to BlinkID recognizers:
    - `allowBarcodeScanOnly` - allows barcode recognition to proceed even if the initial extraction fails - set to `false` by default
    - `combineFrameResults` - enables the aggregation of data from multiple frames - set to `true` by default

*July 19, 2024*

## v6.9.0

- We have updated the plugin to [Android SDK v6.9.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.9.0) and [iOS SDK v6.9.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.9.0)

**Expanded document coverage**

- All of the new documents & document versions can also be seen in the release notes for native Android and iOS SDKs.

**Custom mandatory fields**

- We’re introducing the option to define a custom set of mandatory fields. This feature allows greater flexibility in the scanning process by enabling the extraction of only the necessary information from identity documents.
- Custom mandatory fields can be set at the document level or applied universally to all document types.
- Custom mandatory fields can be set with `CustomClassRules` and `DetailedFieldType`.

**Glare and blur detection**

- We’ve introduced glare detection to BlinkID, which removes occlusion on document images caused by glare.
- We’ve raised the threshold for our blur model, making it stricter. This improvement ensures that sharper images are accepted for processing.
    - To disable the glare and blur filters, modify the `enableBlurFilter` and `enableGlareFilter` properties on the BlinkID recognizers (filters are enabled by default).
    - The strictness level can be modified to `Strict`, `Normal` and `Relaxed` on the `glareStrictnessLevel` and `blurStrictnessLevel` properties with `StrictnessLevel`.
    - To check if glare and blur are present on the document after the scanning process has finished, see glareDetected and blurDetected properties in `ImageAnalysisResult`.

**UI Settings**

- Real-time feedback during scanning includes a new UI message to help users position the document correctly and reduce glare and blur.
    - Check `errorGlareDetected` and `errorBlurDetected` in the `BlinkIdOverlaySettings`.
- We have added camera presets to each platform
    - Modify `AndroidCameraResolutionPreset` and `iOSCameraResolutionPreset` in `BlinkIdOverlaySettings` to change different to camera resolutions if necessary.
- Camera Legacy API - Android-specific
    - We have added `enableAndroidLegacyCameraApi` property. This setting should only be used if the new Camera2 API is not working on the device, and it should not be applied to all devices.


*May 10, 2024*

## v6.7.0

- We have updated the plugin to [Android SDK v6.7.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.7.0) and [iOS SDK v6.7.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.7.0)
- Updated the SDK with new regions and types, which can be found in the native documentation with version 6.6.0 [Android](https://github.com/BlinkID/blinkid-android/releases/tag/v6.6.0) and [iOS](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.6.0)
- Added Real ID symbol detection on US driver's licenses in the `ImageAnalysisResult` class.
- Added partial anonymization of the Document Number field.
    - Anonymization can be added in `ClassAnonymizationSettings` class by additionally adding `DocumentNumberAnonymizationSettings`.
- Added `BarcodeDetectionFailed` to `ProcessingStatus`.
    - It is returned when the mandatory barcode is not present on the back of US documents.
- Added settings `showCancelButton` and `showTorchButton` in `BlinkIdOverlaySettings` with which the ‘Cancel’ and ‘Torch’ buttons in the scanning UI can be shown or hidden.
- This version of the SDK contains the native iOS `BlinkID.xcframework` with the privacy manifest file (`PrivacyInfo.xcprivacy`).
- Fixed issue with setting the SDK language for Android.

### Major API update

- We have introduced the **DirectAPI** method of scanning, which allows the SDK to extract the document information from static images without the need to use the device’s camera and our UI.
- Usage:
    - The `scanWithDirectApi` method requires four parameters:
    - `recognizerCollection`, which is a collection of Recognizers used for document scanning.
    - `frontImage`, which would represent the front image of the document in the Base64 format string
    - `backImage`,  which would represent the back image of the document in the Base64 format string
        - the `backImage` parameter is optional when using the `BlinkIdSingleSideRecognizer`, and can be passed as `null` or an empty string (`””`). 
    - `license`, the licenses for iOS and Android required to unlock the SDK
- An example of its usage can be found in the [sample application](https://github.com/BlinkID/blinkid-react-native/blob/master/sample_files/index.js) , both for the Multiside and Singleside scanning. 
- More information about the DirectAPI scanning can be found here in the native documentation for [Android](https://github.com/BlinkID/blinkid-android?tab=readme-ov-file#direct-api) and [iOS](https://github.com/BlinkID/blinkid-ios?tab=readme-ov-file#direct-api-processing)
- We still recommend using direct camera scanning, as static images can sometimes be in lower-quality which can cause SDK extraction error. It would be best to use the `scanWithDirectApi` method when using the device’s camera is not an option.

*February 21, 2024*

## v6.5.0

- We have updated the plugin to [Android SDK v6.5.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.5.0) and [iOS SDK v6.5.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.5.0)
- Added `cardOrientation` property to `ImageAnalysisResult`
- Fixed issue with the SDK localization

*December 21, 2023*

## v6.4.0

We have updated plugin to [Android SDK v6.4.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.4.0) and [iOS SDK v6.4.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.4.0)

*November 16, 2023*

## v6.3.0

We have updated plugin to [Android SDK v6.3.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.3.0) and [iOS SDK v6.3.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.3.0)


*April 6, 2023*

## v6.1.1


We have updated plugin to [Android SDK v6.1.2](https://github.com/BlinkID/blinkid-android/releases/tag/v6.1.2) and [iOS SDK v6.1.2](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.1.2)

*February 20, 2023*

## v6.1.0


We have updated plugin to [Android SDK v6.1.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.1.0) and [iOS SDK v6.1.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.1.0)

*June 30, 2022*

## v5.17.0


We have updated plugin to [Android SDK v5.17.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.17.0) and [iOS SDK v5.17.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.17.0)

*April 13, 2022*

## v5.16.0


We have updated plugin to [Android SDK v5.16.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.16.0) and [iOS SDK v5.16.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.16.0)

*January 11, 2022*

## v5.15.1


We have updated plugin to [Android SDK v5.15.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.15.0) and [iOS SDK v5.15.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.15.0)

*October 6, 2021*

## v5.14.0

- Updated to [Android SDK v5.14.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.14.0) and [iOS SDK v5.14.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.14.0)

*August 30, 2021*

## v5.13.0

We have updated plugin to [Android SDK v5.13.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.13.0) and [iOS SDK v5.13.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.13.0)

*July 2, 2021*

## v5.12.0

- Updated to [Android SDK v5.12.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.12.0) and [iOS SDK v5.12.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.12.0)

*April 20, 2021*

## v5.11.0

- Updated to [Android SDK v5.11.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.11.0) and [iOS SDK v5.11.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.11.0)

*February 24, 2021*

## v5.10.0

- Updated to [Android SDK v5.10.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.10.0) and [iOS SDK v5.10.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.10.0)

*December 16, 2020*

## v5.9.0

- Updated to [Android SDK v5.9.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.9.0) and [iOS SDK v5.9.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.9.0)

*October 27, 2020*

## v5.8.1

- Fixed `documentDataMatch` serialization.

*September 30, 2020*

## v5.8.0

- Updated to [Android SDK v5.8.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.8.0) and [iOS SDK v5.8.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.8.0)

*August 21, 2020*

## v5.7.2

- fix for Android plugin using old SDK version

*August 21, 2020*

## v5.7.1

- Updated to [iOS SDK v5.7.1](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.7.1)

*August 18, 2020*

## v5.7.0

- Updated to [Android SDK v5.7.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.7.0) and [iOS SDK v5.7.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.7.0)

*July 29, 2020*

## v5.6.1

- Fixed `MBBarcodeResult rawData` serialization which caused crashes on iOS.

- You need to make sure to use the Flipper version 0.37.0 in your Podfile:
`versions['Flipper'] ||= '~> 0.37.0'`

*July 20, 2020*

## v5.6.0

- Updated to [Android SDK v5.6.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.6.0) and [iOS SDK v5.6.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.6.0)

*June 30, 2020*

## v5.5.1

- [iOS] Bugfix for cases when multiple recognizers are used

*June 8, 2020*

## v5.5.0

- Updated to [Android SDK v5.5.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.5.0) and [iOS SDK v5.5.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.5.0)

*April 29, 2020*

## v5.4.0

- Updated to [Android SDK v5.4.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.4.0) and [iOS SDK v5.4.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.4.0)

*March 19, 2020*

## v5.3.0

- Updated to [Android SDK v5.3.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.3.0) and [iOS SDK v5.3.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.3.0)

*February 6, 2020*

## v5.2.0

- Updated to [Android SDK v5.2.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.2.0) and [iOS SDK v5.2.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.2.0)

*December 18, 2019*

## v5.1.0

- Updated to [React Native 0.61.5](https://github.com/facebook/react-native/releases/tag/v0.61.5)
- Updated to [Android SDK v5.1.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.1.0) and [iOS SDK v5.1.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.1.0)

*October 23, 2019*

## v5.0.0

- Updated to [React Native 0.61.2](https://github.com/facebook/react-native/releases/tag/v0.61.2)
- Updated to [Android SDK v5.0.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.0.0) and [iOS SDK v5.0.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.0.0)

*September 25, 2019*

## v4.11.2

Updated to [Android SDK v4.11.1](https://github.com/BlinkID/blinkid-android/releases/tag/v4.11.1)

*August 28, 2019*

## v4.11.1

IMPORTANT
- Fixes iOS .pbxproj file for [iOS SDK v4.11.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.11.0) and fixes [BlinkID React Native v4.11.0](https://github.com/BlinkID/blinkid-react-native/releases/tag/v4.11.0) build

*August 21, 2019*

## v4.11.0

- Updated to [Android SDK v4.11.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.11.0) and [iOS SDK v4.11.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.11.0)

*July 17, 2019*

## v4.10.0

- Updated to [Android SDK v4.10.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.10.0) and [iOS SDK v4.10.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.10.0)
- Updated to [react-native v0.59.10](https://github.com/facebook/react-native/releases/tag/v0.59.10)

*May 31, 2019*

## v4.9.1

- Updated to [Android SDK v4.9.1](https://github.com/BlinkID/blinkid-android/releases/tag/v4.9.1) and [iOS SDK v4.9.1](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.9.1)
- iOS - fixed missing `MBPassportRecognizerWrapper`

*April 26, 2019*

## v4.9.0

- Updated to [Android SDK v4.9.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.9.0) and [iOS SDK v4.9.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.9.0)

*March 25, 2019*

## v4.8.0

- Updated to [Android SDK v4.8.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.780) and [iOS SDK v4.8.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.8.0)

*February 22, 2019*

## v4.7.0

- Updated to [Android SDK v4.7.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.7.0) and [iOS SDK v4.7.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.7.0)

*January 25, 2019*

## v4.6.0

- Updated to [Android SDK v4.6.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.6.0) and [iOS SDK v4.6.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.6.0)

*December 20, 2018*

## v4.5.0

- Updated to [Android SDK v4.5.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.5.0) and [iOS SDK v4.5.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.5.0)

*November 19, 2018*

## v4.4.0

- Updated to [Android SDK v4.4.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.4.0) and [iOS SDK v4.4.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.4.0)
- [android, iOS] added support for changing tooltip strings in  `DocumentVerificationOverlay`

*October 17, 2018*

## v4.3.0

- Updated to [Android SDK v4.3.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.3.0) and [iOS SDK v4.3.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.3.0)

*September 5, 2018*

## v4.2.0

- Updated to [Android SDK v4.2.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.2.0) and [iOS SDK v4.2.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.2.0)
- [android, iOS] added option to disable warning for time limited license key

*August 16, 2018*

## v4.1.0

- Updated to [Android SDK v4.1.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.1.0) and [iOS SDK v4.1.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.1.0)

*June 20, 2018*

## v4.0.0

- new API, which is not backward compatible with 1.x.x release series, but resembles native iOS and Android APIs and also has feature parity with all recognizers available in native SDKs
    - using [iOS SDK v4.0.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v4.0.0) and [Android SDK v4.0.0](https://github.com/BlinkID/blinkid-android/releases/tag/v4.0.0)
- check updated [README](README.md) for more information about new features and [example app](demoApp/index.js) to see how new API can be used

*May 8, 2018*

## v2.0.0

 * [android] updated to BlinkID SDK v3.16.0
 * [ios] Updated SDK version to v2.17.3
 * added support for **New Zealand driver's license**
 * **[Breaking API change]** refactored image export:
     - Renamed `CroppedImage` to `DocumentImage` 
     - `Successful` image is still returned in `scanningResult.resultImageSuccessful`
     - `Document`(previously cropped) and `Face` images are now contained in `scanningResult.resultList[i].resultImageDocument` and `scanningResult.resultList[i].resultImageFace` respectively.

*January 17, 2018*

## v1.4.2

 * [iOS] Updated iOS SDK to v2.15
 * [iOS] Cleaned up search paths to support app ejected with expokit

*January 17, 2018*

## v1.4.1

- updated Android SDK to v3.14

*November 8, 2017*

## v1.4.0

* Added pdf417 recognizer
* Added support for face image extraction from face detector recognizer
* Updated BlinkID framework to v2.12.0

*October 31, 2017*

## v1.3.2

 * Added control over successful scan sound. #22 

*October 2, 2017*

## v1.3.1

* Fixed mykad birthdate so both android and ios have the same format: YYMMDD

*September 22, 2017*

## v1.3.0

* Update support for React Native v0.48.3
* Update BlinkID SDK version for Android

*September 12, 2017*

## v1.2.1

Fixed issue #9 

*September 11, 2017*

## v1.2.0

Added MyKad support.

*July 20, 2017*

## v1.1.0

Initial BlinkID react-native plugin for Android and iOS
</div>