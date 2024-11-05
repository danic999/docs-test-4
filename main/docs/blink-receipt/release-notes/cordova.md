---
title: "Cordova"
sidebar_position: 3
description: "Cordova release notes"
---
## 2.90.30

* Increased minimum target to iOS13
* Parsing updates

## 2.90.7

* Fixed invalid privacy manifest error when submitting to App Store
* Added general optimizations and stability improvements

## 2.90.0

* Added support for `Retailer Webview Authentication`
* Added general optimizations and stability improvements
* Added PrivacyInfo

## 1.1.3

#### Added
* Add HomeDepot support (Online orders only)
* Add Costco support
* Add Meijer support
* Add ShopRite support
* Add Lowe's support
* Add Best Buy support
* Add Kohl's support
* Add CVS support
* Add Chewy support
* Add Sephora support
* Add Macy's support
* Add Staples support
* Add GrubHub support

#### Fixed
* OTA update improvements
* `Wegmans`
    * Android authentication fix
* `Starbucks`
    * Sometime an invalid storeNumber is returned
* `Target`
    * Missing `subtotal` and `tax` for some orders
* `Kroger`
    * Returning duplicate orders for some `cutOff` ranges
* `Walgreens`
    * Fetching orders bug fixes

#### Updated
* Speed improvements and general optimizations 

## 1.1.2

#### Updated
* Product Intelligence improvements


## 1.1.1

#### Updated
* Min iOS version >= 10.0


#### Fixed
* `Publix` 
    * Failing to authenticate with valid credentials
* `Target`
    * Successful return with empty list if no orders are found

## 1.1.0

#### Added
* `Instacart`
    * Captcha support when authenticating
* `Shipt` support 
* `Starbucks` support
* OTA updates with versioning so only retailers supported by the SDK can run.
* Ability to specify exact `CutOffDate` parameter when fetching new orders.


#### Updated
* Improved Unit Tests
* Renamed `config.alp` -> `retailers.alp`
* Speed improvements and code optimizations


#### Fixed
* `Walmart` 
    * Failing to authenticate randomly
    * Support for new APIs
    * Missing the payment card type 
* `Walmart Grocery`
    * Support for new APIs
* `Walgreens`
    * Support for their new login flow
    * Not returning correct `cacheIdentifier` value
* `VerifyAccount` action doesn't return response some time when 2FA or captcha is enabled
* OTA update so only newer versions are accepted  


## 1.0.2