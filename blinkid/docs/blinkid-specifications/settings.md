---
id: settings
title: Settings & configurations
sidebar_position: 7
---

# Settings & configurations

The BlinkID SDK has a vast repository of settings and configurations. To align the experience with your business needs, here are the most common configurations.

## Choosing the right recognizer

When initializing the SDK, it's necessary to choose a recognizer that meets your needs & requirements. In the majority of use-cases, the BlinkIdSingleSideRecognizer or BlinkIdMultiSideRecognizer will be used. The recognizer selection will drive the user experience as well as impact the data that is returned by the SDK. Use the SingleSideRecognizer when it's necessary to only obtain a single side capture, even for two sided documents like IDs & Drivers Licenses. The MultiSideRecognizer will allow the user to scan both sides of their document in a single scan session and intelligently conclude scanning after the first capture for single sided document like Passports. 

:::warning[Avoid two single sided scans]
The MultiSideRecognizer will automatically perform a two sided scan within a single camera session. Additiionally, it combines various discrete data objects from the ID like the Front Visual Inspection Zone, Machine Readable Zone, Barcode, and Back Visual Inspection Zone into a single, easy-to-consume object. 

On the other hand, two independent single sided scans will require more time from the user as they navigate between scan sessions and eliminate the possibility of consolidating all data elements from the ID into a single digestable format. 
:::

## Enabling recognition modes

The recognition modes will determine what level of document recognition is allowable for a scan. By default, FullRecognition is enabled. This means that any of the 2,500+ identity documents fully supported by the BlinkID SDK can be scanned. What happens when an unrecognized document is scanned? This will be determined by which recognition modes are enabled. Think of these as fallback mechanisms in the scanning process to still obtain some information even if the document is not recognized.

**enableMrzId** recognition mode will allow unrecognized IDs to be scanned as long as there is a Machine Readable Zone (MRZ) detected. The SDK will return a recognitionMode = MrzId, indicating that this isn't a fully recognized ID but an MRZ was detected and extracted. Often times, the MRZ contains enough information to allow users to continue in their workflow uninterrupted. 

**enableMrzPassport** is similar to the MRZ ID recognition mode. The MRZ Passport recognition mode will allow an unrecognized passport to be scanned so long as the Machine Readable Zone (MRZ) is detected. The SDK response will provide a recognitionMode = MrzPassport.

**enableMrzVisa** will allow unrecognized Visa documents containing a Machine Readable Zone (MRZ) to be scanned. The result from the SDK will contain recognitionMode = MrzVisa.

**enableBarcodeId** allows IDs and Drivers Licenses to be scanned with the expectation of extracting a PDF417 barcode from the document. The extracted barcode data will be available in the SDK response along with the indication that the recognitionMode = BarcodeId.

**enablePhotoId** is a final fallback mechanism. The Photo ID recognition mode would allow any unrecognized document to be scanned as long as it appears to be a Photo ID. In this case, the BlinkID SDK can only be expected to return images of the document, including the extracted face photo. 


By enabling all recognition modes, you'll guarantee any identity document can be scanned and any data extractable by the SDK is returned. Disabling these recognition modes would prevent users from completing scan in the event they try to scan an unrecognized document. 

:::tip[Full list of supported identity documents]
For a full list of documents covered under the FullRecognition recognition mode, please refer to our [supported documents list](https://microblink.com/resources/full-list-of-supported-identity-documents/). 
:::

## Filtering unwanted document classes

While the BlinkID SDK is capable of fully recognizing >2,500 identity documents from over 140 countries, that doesn't mean you want to accept all of those documents in your scan workflow. Preventing users from scanning unwanted document classes can be achieved easily by filtering against the documents Class Info. The Class Info property contains valuable document classification information like the country and region of origin and the document type (e.g. Passport, ID, DL, etc). It is possible then, to use the Class Info property to filter out documents from a scanning session based on document origin and the type of document. The implementation of this feature varies slight by platform so ask your Customer Success representative or Solution Engineer for a code sample relevant to your project. 

## Obtaining images

By default, image return is disabled to minimize memory consumption on standard integrations. It's common, however, to require images of or from the document during the scan process for storage purposes or additional downstream processing. The BlinkID SDK is capable of returning high quality images in a native image format by enabling recognizer settings for:

<li>*returnFullDocumentImage* for cropped perspective-corrected document images</li>
<li>*saveCameraFrames* for unaltered full camera frame document images</li>
<li>*returnFaceImage* for a cropped image of the face extracted from the document</li>
<li>*returnSignatureImage* for a cropped image of the signature extracted from the document</li>
<br></br>
Additionally, various settings exist that can manipulate the size, resolution, and sometimes framing of these images. Anonymization settings can be applied to ensure highly sensitive data is redacted on the full document images. 

:::info[Additional settings]
There are a wide variety of settings not covered in this document that can impact the scan experience and SDK result. Please fully review the GitHub documentation for a comprehensive list of settings available or ask your Microblink contacts how you could achieve your desired experience and output.
:::