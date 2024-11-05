---
id: platforms
title: Platforms
sidebar_position: 1
---

# Platforms

Once you've decided to adopt BlinkID as your identity document scanning experience, the next thing to figure out is the integration type that will best suit the needs of your business and the people interacting with your products & services. 

Right now, those include:


* A native integration with your mobile app 

* A cross-platform integration with your mobile app (ReactNative, Cordova, Flutter and
Capacitor)

* A browser-based integration with your website or web app

* An API integration on your own infrastructure or Microblink's Cloud

Let’s take a closer look at some technical information each of these options entails:



<table style={{width: "100%"}}>
  <tr>
    <th style={{textAlign: "center", color: "#0062f2",borderRight: "1px solid rgb(225, 225, 225)"}}>PLATFORM</th>
    <th colSpan={2} style={{textAlign: "center", color: "#0062f2", borderRight: "1px solid rgb(225, 225, 225)"}}>MOBILE</th>
    <th colSpan={3} style={{textAlign: "center", color: "#0062f2"}}>WEB</th>
  </tr>
  <tr>
    <td style={{borderRight: "1px solid rgb(225, 225, 225)", borderBottom: "1px solid rgb(225, 225, 225)"}}>**Solution**</td>
    <td style={{textAlign: "center", borderBottom: "1px solid rgb(225, 225, 225)"}}>**Native SDKs**</td>
    <td style={{textAlign: "center", borderRight: "1px solid rgb(225, 225, 225)", borderBottom: "1px solid rgb(225, 225, 225)"}}>**Cross-platform SDKs**</td>
    <td style={{textAlign: "center", borderBottom: "1px solid rgb(225, 225, 225)"}}>**In-browser SDK**</td>
    <td style={{textAlign: "center", borderBottom: "1px solid rgb(225, 225, 225)"}}>**Self-hosted API**</td>
    <td style={{textAlign: "center", borderBottom: "1px solid rgb(225, 225, 225)"}}>**Cloud API**</td>
  </tr>
  <tr>
    <td style={{borderRight: "1px solid rgb(225, 225, 225)"}}>**File size**</td>
    <td style={{textAlign: "center"}}>\<10MB, compressed</td>
    <td style={{textAlign: "center", borderRight: "1px solid rgb(225, 225, 225)"}}>\<10MB, compressed</td>
    <td style={{textAlign: "center"}}>~11MB, compressed</td>
    <td style={{textAlign: "center"}}>None (no change to the end user)</td>
    <td style={{textAlign: "center"}}>None (no change to the end user)</td>
  </tr>
  <tr>
    <td style={{borderRight: "1px solid rgb(225, 225, 225)"}}>**Processing**</td>
    <td style={{textAlign: "center"}}>Client-side</td>
    <td style={{textAlign: "center", borderRight: "1px solid rgb(225, 225, 225)"}}>Client-side</td>
    <td style={{textAlign: "center"}}>Client-side</td>
    <td style={{textAlign: "center"}}>Server-side</td>
    <td style={{textAlign: "center"}}>Server-side</td>
  </tr>
  <tr>
    <td style={{borderRight: "1px solid rgb(225, 225, 225)"}}>**Version upgrades**</td>
    <td style={{textAlign: "center"}}>Requires SDK & app update</td>
    <td style={{textAlign: "center", borderRight: "1px solid rgb(225, 225, 225)"}}>Requires SDK & app update</td>
    <td style={{textAlign: "center"}}>Requires SDK & app update</td>
    <td style={{textAlign: "center"}}>Requires container update</td>
    <td style={{textAlign: "center"}}>Autonomous</td>
  </tr>
  <tr>
    <td style={{borderRight: "1px solid rgb(225, 225, 225)"}}>**Skillset needed**</td>
    <td style={{textAlign: "center"}}>iOS or Android development (Objective-C, Swift, Java, Kotlin) </td>
    <td style={{textAlign: "center", borderRight: "1px solid rgb(225, 225, 225)"}}>Mobile cross-platform development (JavaScript, TypeScript, Dart, C#)</td>
    <td style={{textAlign: "center"}}>Frontend development (JavaScript, TypeScript) </td>
    <td style={{textAlign: "center"}}>Backend development (any framework compatible with REST) & DevOps (Docker, Kubernetes)</td>
    <td style={{textAlign: "center"}}>Backend development (any framework compatible with REST)</td>
  </tr>
  <tr>
    <td style={{borderRight: "1px solid rgb(225, 225, 225)"}}>**User interface**</td>
    <td style={{textAlign: "center"}}>Built-in, customizable</td>
    <td style={{textAlign: "center", borderRight: "1px solid rgb(225, 225, 225)"}}>Built-in, localized</td>
    <td style={{textAlign: "center"}}>Built-in, customizable</td>
    <td style={{textAlign: "center"}}>Absent, available</td>
    <td style={{textAlign: "center"}}>Absent, available</td>
  </tr>
  <tr>
    <td style={{borderRight: "1px solid rgb(225, 225, 225)"}}>**Estimated integration time**</td>
    <td style={{textAlign: "center"}}>One day*</td>
    <td style={{textAlign: "center", borderRight: "1px solid rgb(225, 225, 225)"}}>Two days*</td>
    <td style={{textAlign: "center"}}>One day*</td>
    <td style={{textAlign: "center"}}>Two weeks</td>
    <td style={{textAlign: "center"}}>Two days</td>
  </tr>
</table>

*\*Using a default UI. Customizing the UI requires additional development time, depending on the scope of changes you wish to make.*


## Start building

Now that you have a better understanding of the platforms BlinkID is available on, you can get started with an
integration that best fits your needs. 

To do so, you'll need a license. That license will allow you to unlock the SDK in your mobile or web application. More information is available in the next section on [Licensing](./licensing.md), however, we recommend creating a free account at developer.microblink.com where your licenses will be managed.

Next, it will be necessary to determine if you'll be using Microblink's [user experience](./user-experience.md) or building your own. Our's is the result of extensive user testing and there are vast customization options available.

During the integration, it's critical to follow the [best practices](./best-practices.md). These tips will ensure you achieve optimal success rates using the solution and offer the best experience possible.

Finally, every use case and business is unique. To accommodate such diversity there are a variety of [settings and configurations](./settings.md) available. We cover the common ones in these documents but for an exhaustive list, refer to the relevant platform's technical docs. 
