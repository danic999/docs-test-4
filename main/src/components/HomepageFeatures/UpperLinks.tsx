import React from "react";
import clsx from "clsx";
import android from "../../../docs/assets/android.png";
import ios from "../../../docs/assets/ios.png";
import cordova from "../../../docs/assets/cordova.png";
import capacitor from "../../../docs/assets/capacitor.png";
import flutter from "../../../docs/assets/flutter.png";
import reactNative from "../../../docs/assets/react.png";
import selfHosted from "../../../docs/assets/platform_in-browser.png";
import server from "../../../docs/assets/platform_self-hosted.png";
import docs from "../../../docs/assets/docs.png";
import platform from "../../../docs/assets/platform.png";
import api from "../../../docs/assets/api.png";

export default function UpperLinks({ type, padding, centred }) {
  const links_blinkid = [
    {
      icon: ios,
      url: "https://github.com/BlinkID/blinkid-ios",
      title: "iOS",
    },
    {
      icon: android,
      url: "https://github.com/BlinkID/blinkid-android",
      title: "Android",
    },
    {
      icon: capacitor,
      url: "https://github.com/BlinkID/blinkid-capacitor",
      title: "Capacitor",
    },
    {
      icon: cordova,
      url: "https://github.com/BlinkID/blinkid-cordova",
      title: "Cordova",
    },
    {
      icon: flutter,
      url: "https://github.com/BlinkID/blinkid-flutter",
      title: "Flutter",
    },
    {
      icon: reactNative,
      url: "https://github.com/BlinkID/blinkid-react-native",
      title: "React Native",
    },
  ];

  const links_blinkid_web = [
    {
      icon: server,
      url: "https://docs.microblink.com/documentation/self-hosted/current/overview.html#introduction",
      title: "Self-hosted",
    },
    {
      icon: selfHosted,
      url: "https://github.com/BlinkID/blinkid-in-browser",
      title: "Browser SDK",
    },
  ];
  const links_blinkid_hero = [
    {
      url: "/docs/blinkid/mobile-sdk",
      title: "Moblie SDKs",
    },
    {
      url: "/docs/blinkid/browser-sdk",
      title: "Browser SDK",
    },
  ];

  const links_blinkcard = [
    {
      icon: ios,
      url: "https://github.com/blinkcard/blinkcard-ios",
      title: "iOS",
    },
    {
      icon: android,
      url: "https://github.com/blinkcard/blinkcard-android",
      title: "Android",
    },
    {
      icon: capacitor,
      url: "https://github.com/blinkcard/blinkcard-capacitor",
      title: "Capacitor",
    },
    {
      icon: cordova,
      url: "https://github.com/blinkcard/blinkcard-cordova",
      title: "Cordova",
    },
    {
      icon: flutter,
      url: "https://github.com/blinkcard/blinkcard-flutter",
      title: "Flutter",
    },
    {
      icon: reactNative,
      url: "https://github.com/blinkcard/blinkcard-react-native",
      title: "React Native",
    },
  ];

  const links_blinkcard_web = [
    {
      icon: server,
      url: "https://docs.microblink.com/documentation/self-hosted/current/overview.html#introduction",
      title: "Self-hosted",
    },
    {
      icon: selfHosted,
      url: "https://github.com/blinkcard/blinkcard-in-browser",
      title: "Browser SDK",
    },
  ];
  const links_blinkcard_hero = [
    {
      url: "/docs/blink-card/",
      title: "Moblie SDKs",
    },
    {
      url: "/docs/blink-card/",
      title: "Browser SDK",
    },
  ];

  const links_blinkreceipt = [
    {
      icon: ios,
      url: "https://github.com/BlinkReceipt/blinkreceipt-ios",
      title: "iOS",
    },
    {
      icon: android,
      url: "https://github.com/BlinkReceipt/blinkreceipt-android",
      title: "Android",
    },
  ];

  const links_blinkreceipt_web = [
    {
      icon: platform,
      url: "https://app.swaggerhub.com/apis-docs/blinkreceipt/apiscan/14#/default/post_api_scan_v14",
      title: "Scan API",
    },
  ];
  const links_blinkreceipt_digital = [
    {
      icon: ios,
      url: "https://blinkreceipt.github.io/blinkereceipt-ios/e-receipt-parsing.html",
      title: "iOS",
    },
    {
      icon: android,
      url: "https://github.com/BlinkReceipt/blinkreceipt-android/tree/master/blinkreceipt-digital",
      title: "Android",
    },
  ];
  const links_blinkreceipt_digital_web = [
    {
      icon: platform,
      url: "https://app.swaggerhub.com/apis-docs/blinkreceipt/ereceipts",
      title: "Remote Scrape API ",
    },
  ];
  const links_blinkreceipt_account = [
    {
      icon: ios,
      url: "https://blinkreceipt.github.io/blinkereceipt-ios/account-linking.html",
      title: "iOS",
    },
    {
      icon: android,
      url: "https://github.com/BlinkReceipt/blinkreceipt-android/tree/master/blinkreceipt-account-linking",
      title: "Android",
    },
  ];
  const links_verify = [
    {
      url: "https://blinkidverify.docs.microblink.com/docs/category/introduction",
      title: "Request documentation",
    },
  ];

  let links;
  let verify = false;

  switch (type) {
    case "blinkid":
      links = links_blinkid;
      break;
    case "blinkid_web":
      links = links_blinkid_web;
      break;
    case "blinkid_hero":
      links = links_blinkid_hero;
      break;
    case "blinkcard":
      links = links_blinkcard;
      break;
    case "blinkcard_web":
      links = links_blinkcard_web;
      break;
    case "blinkcard_hero":
      links = links_blinkcard_hero;
      break;

    case "blinkreceipt":
      links = links_blinkreceipt;
      break;
    case "blinkreceipt_web":
      links = links_blinkreceipt_web;
      break;
    case "blinkreceipt_digital":
      links = links_blinkreceipt_digital;
      break;
    case "blinkreceipt_digital_web":
      links = links_blinkreceipt_digital_web;
      break;
    case "blinkreceipt_account":
      links = links_blinkreceipt_account;
      break;
    case "verify":
      links = links_verify;
      verify = true;
      break;
    default:
      links = [];
  }

  return (
    <div
      className={`flex flex-col gap-[12px] ${
        padding !== "no" ? "py-[34px]" : "pt-[12px]"
      }`}
    >
      {links.map((link) => (
        <div className={clsx("flex flex-row text-left")} key={link.url}>
          <a
            className={`flex flex-row gap-[8px] items-center text-center ${
              padding == "no" ? "py-[12px]" : ""
            } ${centred ? "mx-auto" : ""}`}
            href={link.url}
          >
            {link.icon && link.icon !== "0" && (
              <img
                src={link.icon}
                height="20px"
                width="20px"
                alt={link.title || "icon"}
              />
            )}
            <span className="text-lg font-medium text-royal-blue">
              {link.title}
            </span>
            <svg
              className="fill-royal-blue"
              width="24"
              height="24"
              fill="#0062f2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.36635 17.6487C9.14138 17.4236 9.015 17.1185 9.015 16.8003C9.015 16.4821 9.14138 16.1769 9.36635 15.9519L13.3179 12.0003L9.36635 8.04865C9.25173 7.93796 9.16032 7.80554 9.09742 7.65914C9.03453 7.51274 9.00143 7.35527 9.00005 7.19594C8.99866 7.0366 9.02902 6.87859 9.08936 6.73111C9.1497 6.58363 9.2388 6.44965 9.35147 6.33698C9.46414 6.22431 9.59813 6.13521 9.7456 6.07487C9.89308 6.01453 10.0511 5.98417 10.2104 5.98555C10.3698 5.98694 10.5272 6.02004 10.6736 6.08293C10.82 6.14582 10.9524 6.23724 11.0631 6.35186L15.8631 11.1519C16.0881 11.3769 16.2145 11.6821 16.2145 12.0003C16.2145 12.3185 16.0881 12.6236 15.8631 12.8487L11.0631 17.6487C10.8381 17.8736 10.5329 18 10.2147 18C9.89655 18 9.59138 17.8736 9.36635 17.6487Z"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
