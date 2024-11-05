---
id: licensing
title: Licensing
sidebar_position: 2
---

# License Management Program

Microblink’s products automatically validate your license keys at runtime to ensure you comply with our License Agreement.

:::tip[Licensing BlinkID]
To obtain a production license, please get in contact with our [sales team](https://microblink.com/contact-us/?utm_source=leaflet&utm_medium=QR&utm_campaign=BlinkID_Microblink_ALL&utm_content=571).

If you haven’t already, get your team to [sign up](https://developer.microblink.com/) on our Developer Dashboard to get everything working  perfectly before going live. This is where you and your team can create trial licenses to try out BlinkID free for 30 days.
:::

Keep reading for a more detailed overview of the program and how it affects you.

## How is your license validated?

Each time an end user launches the camera to perform a scan or issues a scan request via DirectAPI, a license validity check is carried out. If the check is successful, the device will be issued a lease that will postpone any further checks on the license for a set period of time.

The license validity check contains the following information:

<li>License ID (unique ID of your license)</li>
<li>Licensee</li>
<li>Application identifier (package name on Android, Bundle ID on iOS, fully qualified domain name on browser SDK, machine ID on Linux, Mac UUID on MacOS, Windows Product ID on Windows)</li>
<li>Product being used (e.g., BlinkID)</li>
<li>The version of the Microblink product being used (e.g., v7.0)</li>
<li>The platform on which the product is being used (iOS, Android, Linux, MacOS, Windows, Self-hosted API or Browser SDK) and OS version</li>
<br></br>

:::info[No personal data]
No personal data such as the user's name, date of birth or biometrics are ever shared with Microblink or any other 3rd party through the License Management Program.
:::

The check is sent to Microblink over a secure TLS v1.2 or newer protocol. If the device is offline during scanning, a grace period will be granted, after which the license validity will be checked again. If license validity cannot be established after the grace period, the license is considered locked. If the server responds with a lock state, please [contact our support team](https://help.microblink.com/s/submit-request).

## How does this affect app usability?

To keep the license check light, the average size of the request is around 180 bytes, and the response the server returns has around 500 bytes. This way, the check is quick enough not to affect the overall experience of the product.

Subject to the prior notification as described in the applicable Agreement, Microblink reserves the right to use the License Management Program in order to terminate the license in case of a material breach of obligations, and/or upon termination or expiry of the Agreement executed between you and Microblink.