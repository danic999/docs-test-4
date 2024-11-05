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

export default function CardLinks({ type }) {
  const links_blinkid = [
    {
      icon: ios,
      url: "/release-notes/ios/",
      title: "iOS",
    },
    {
      icon: android,
      url: "/release-notes/android/",
      title: "Android",
    },
    {
      icon: capacitor,
      url: "/release-notes/capacitor/",
      title: "Capacitor",
    },
    {
      icon: cordova,
      url: "/release-notes/cordova/",
      title: "Cordova",
    },
    {
      icon: flutter,
      url: "/release-notes/flutter/",
      title: "Flutter",
    },
    {
      icon: reactNative,
      url: "/release-notes/react-native/",
      title: "React Native",
    },
    {
      icon: selfHosted,
      url: "/release-notes/in-browser/",
      title: "In Browser",
    },
  ];
  const links_blinkreceipt = [
    {
      icon: ios,
      url: "/docs/blink-receipt/release-notes/ios/",
      title: "iOS",
    },
    {
      icon: android,
      url: "/docs/blink-receipt/release-notes/android/",
      title: "Android",
    },

    {
      icon: cordova,
      url: "/docs/blink-receipt/release-notes/cordova/",
      title: "Cordova",
    },
  ];

  const links_blinkcard = [
    {
      icon: ios,
      url: "/docs/blink-card/release-notes/ios/",
      title: "iOS",
    },
    {
      icon: android,
      url: "/docs/blink-card/release-notes/android/",
      title: "Android",
    },
    {
      icon: capacitor,
      url: "/docs/blink-card/release-notes/capacitor/",
      title: "Capacitor",
    },
    {
      icon: cordova,
      url: "/docs/blink-card/release-notes/cordova/",
      title: "Cordova",
    },
    {
      icon: flutter,
      url: "/docs/blink-card/release-notes/flutter/",
      title: "Flutter",
    },
    {
      icon: reactNative,
      url: "/docs/blink-card/release-notes/react-native/",
      title: "React Native",
    },
    {
      icon: selfHosted,
      url: "/docs/blink-card/release-notes/in-browser/",
      title: "In Browser",
    },
  ];

  let links;

  switch (type) {
    case "blinkid":
      links = links_blinkid;
      break;

    case "blinkcard":
      links = links_blinkcard;
      break;
    case "blink-receipt":
      links = links_blinkreceipt;
      break;
    default:
      links = [];
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {links &&
          links.map((link) => (
            <a href={link.url}>
              <div className="py-[32px] pl-[32px] border border-[#F3F4F6] shadow-cardHover rounded-xl flex flex-row gap-[8px] items-center">
                <img
                  src={link.icon}
                  className="w-[20px] h-[20px]"
                  alt={link.title}
                ></img>
                <span className="text-royal-blue text-lg font-medium">
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
              </div>
            </a>
          ))}
      </div>
    </>
  );
}
