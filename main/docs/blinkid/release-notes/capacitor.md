---
title: "Capacitor"
sidebar_position: 3
description: "Capacitor release notes"
---

## v6.11.1

- We have updated the plugin to [Android SDK v6.11.2](https://github.com/BlinkID/blinkid-android/releases/tag/v6.11.2) and [iOS SDK v6.11.1](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.11.1)

**Bug fixes**

- NYC Municipal ID & USA Border Crossing Card 
    - Resolved an issue where the scanning process could get stuck on the back side during multi-side scanning.

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

**Bug fixes**

- Fixed issue where the ‘beep’ sound could not be turned off in the UI settings. By default, the `enableBeep` is set to false.

## v6.9.0

- We have updated the plugin to [Android SDK v6.9.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.9.0) and [iOS SDK v6.9.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.9.0)
- Updated the SDK to Capacitor V6!

**Expanded document coverage**

- All of the new documents & document versions can also be seen in the release notes for Android and iOS.

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

## v6.7.1

- We have updated the plugin to [Android SDK v6.7.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.7.0) and [iOS SDK v6.7.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.7.0)
- Updated the SDK with new regions and types, which can be found in the native documentation with version 6.6.0 [Android](https://github.com/BlinkID/blinkid-android/releases/tag/v6.6.0) and [iOS](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.6.0)
- Added Real ID symbol detection on US driver's licenses in the `ImageAnalysisResult` class.
- Added partial anonymization of the Document Number field.
    - Anonymization can be added in `ClassAnonymizationSettings` class by additionally adding `DocumentNumberAnonymizationSettings`.
- Added `BarcodeDetectionFailed` to `ProcessingStatus`.
    - It is returned when the mandatory barcode is not present on the back of US documents.
- Added settings `showCancelButton` and `showTorchButton` in `BlinkIdOverlaySettings` with which the ‘Cancel’ and ‘Torch’ buttons in the scanning UI can be shown or hidden.
- This version of the SDK contains the native iOS `BlinkID.xcframework` with the privacy manifest file (`PrivacyInfo.xcprivacy`).

### Major API update

- We have introduced the **DirectAPI** method of scanning, which allows the SDK to extract the document information from static images without the need to use the device’s camera and our UI.
- Usage:
    - The `scanWithDirectApi` method requires four parameters:
    - `license`, the licenses for iOS and Android required to unlock the SDK
    - `recognizerCollection`, which is a collection of Recognizers used for document scanning
    - `frontImage`, which would represent the front image of the document in the Base64 format string
    - `backImage`,  which would represent the back image of the document in the Base64 format string
        - the `backImage` parameter is optional when using the `BlinkIdSingleSideRecognizer`, and can be left out from the implementation or passed as an empty string (`””`)
- An example of its usage can be found in the [sample application](https://github.com/BlinkID/blinkid-capacitor/blob/master/sample_files/home.page.ts) , both for the Multiside and Singleside scanning. 
- More information about the DirectAPI scanning can be found here in the native documentation for [Android](https://github.com/BlinkID/blinkid-android?tab=readme-ov-file#direct-api) and [iOS](https://github.com/BlinkID/blinkid-ios?tab=readme-ov-file#direct-api-processing)
- We still recommend using our ‘regular’ way of scanning with the camera, as static images can sometimes be in lower-quality which can cause SDK extraction error. It would be best to use the `scanWithDirectApi` method when using the device’s camera is not an option.

## v6.5.0

- We have updated the plugin to [Android SDK v6.5.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.5.0) and [iOS SDK v6.5.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.5.0)
- Added `cardOrientation` property to `ImageAnalysisResult`
- Fixed issue with the SDK localization

## v6.4.0

- We have updated the plugin to [Android SDK v6.4.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.4.0) and [iOS SDK v6.4.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.4.0)

### Breaking API changes

- The plugin was built with v5.6.0 Capacitor
- The SDK we can scan IDs with Arabic and Cyrillic scripts.
- Renamed `BlinkIdRecognizer` to **`BlinkIdSingleSideRecognizer`**
- Renamed `BlinkIdCombinedRecognizer` to **`BlinkIdMultiSideRecognizer`**
- Added new classes: `StringResult`, `DateResult`, `Date`
    - If a recognizer supports multiple alphabets, its result class will return `StringResult` for results that previously returned `String`.
- `DataMatchResult` and `DataMatchDetailedInfo` are now merged into `DataMatchResult`
- Added new `ClassAnonymizationSettings` setting that enables custom anonymization for any field per country, region, and type of document
- Added new  `AdditionalProcessingInfo` result type that provides information about `missingMandatoryFields`, `invalidCharacterFields`, and `extraPresentFields`
- Added support for a lot of new documents, which can be found [here](https://github.com/BlinkID/blinkid-android/blob/master/documentation/BlinkIDRecognizer.md)
- Added new values to `Country`, `Region` and `Type` enums.

## v5.17.0


We have updated plugin to [Android SDK v5.17.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.17.0) and [iOS SDK v5.17.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.17.0)

## v5.15.0


We have updated plugin to [Android SDK v5.15.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.15.0) and [iOS SDK v5.15.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.15.0)

## v5.14.0

- Updated to [Android SDK v5.14.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.14.0) and [iOS SDK v5.14.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.14.0)

## v5.13.0

- We have updated plugin to [Android SDK v5.13.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.13.0) and [iOS SDK v5.13.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.13.0)
- Upgraded to [Capacitor v3](https://capacitorjs.com/docs/updating/3-0)

## v5.12.0

- Updated to [Android SDK v5.12.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.12.0) and [iOS SDK v5.12.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.12.0)

## v5.11.0

- Updated to [Android SDK v5.11.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.11.0) and [iOS SDK v5.11.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.11.0)

## v5.10.0

- Updated to [Android SDK v5.10.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.10.0) and [iOS SDK v5.10.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.10.0)

## v5.9.0

- Updated to [Android SDK v5.9.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.9.0) and [iOS SDK v5.9.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.9.0)

## v5.8.1

- Fixed `documentDataMatch` serialization.

## v5.8.0

- Updated to [Android SDK v5.8.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.8.0) and [iOS SDK v5.8.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.8.0)

## v5.7.1

- Initial BlinkID Capacitor plugin release 
- Based on latest [Android SDK v5.7.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.7.0) and [iOS SDK v5.7.1](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.7.1)