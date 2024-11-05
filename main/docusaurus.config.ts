import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

const config: Config = {
  title: "Microblink",
  tagline: "Find tutorials, sample code, integration guides, and API references.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.microblink.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "microblink", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "warn", //"throw"
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/", 
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
   
  ],

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-NJKLH75',
      },
    ],
  ],
  clientModules: [
    './globalJs.js'
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },  
    navbar: {
      title: "",
      logo: {
        alt: "Microblink logo",
        src: "img/logo-microblink.svg",
        href: "https://microblink.com",
        srcDark: 'img/logo-microblink-dark-mode.svg',
        target:'_self'
      },
      items: [
        {
          to: "https://docs.microblink.com/",
          label: "Home",
          position: "left",
          target:'_self'
        },  
        {
          to: "/category/blinkid-introduction/",
          label: "BlinkID",
          position: "left",
         
        },  
        {
          type: 'dropdown',
          label: "BlinkID Verify",
          position: "left",
          to:"https://blinkidverify.docs.microblink.com/",
          target:"_self",
          items: [
            {
              to: "https://blinkidverify.docs.microblink.com/docs/category/introduction",
              label: "Docs",
              target:"_self",
            },
            {
              to: "https://blinkidverify.docs.microblink.com/docs/api/request/",
              label: "API Reference",
              target:"_self",
            },
          ]
        },
        {
          to: "/docs/blink-card/release-notes",
          type:"dropdown",
          label: "BlinkCard",
          position: "left",
          items: [
            {
              to: "/docs/blink-card/release-notes",
              label: "Release Notes",
              target:"_self",
            },
            {
              to: "/docs/blink-card/mobile-sdk",
              label: "Mobile SDKs",
              target:"_self",
            },
            {
              to: "/docs/blink-card/browser-sdk",
              label: "Browser SDK",
              target:"_self",
            },
          ]
        },
        {
          to: "/docs/blink-receipt/release-notes",
          label: "BlinkReceipt",
          position: "left",
          target:'_self',
          type:'dropdown',
          items: [
            {
              to: "/docs/blink-receipt/release-notes",
              label: "Release Notes",
              target:"_self",
            },
            {
              to: "/docs/blink-receipt/physical-receipt/",
              label: "Physical Receipt Integrations",
              target:"_self",
            },
            {
              to: "/docs/blink-receipt/digital-receipt/",
              label: "Digital Receipt Integrations",
              target:"_self",
            },
            {
              to: "/docs/blink-receipt/account-linking/",
              label: "Account Linking",
              target:"_self",
            },
          ]

        },  
       /* 
       icons for language
       {
          type: "localeDropdown",
          position: "right",
          icon: "img/lang.svg",
        },*/
        {
          href: 'https://github.com/microblink',
          position: 'right',
          className: 'header-github-link',
        },
        {
          href: 'https://microblink.com/free-plan/',
          position: 'right',
          label:'Start free plan',
          className: 'free-trial-link',
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        href: "/",
        src: "/img/microblink-logo.png",
        alt: "Microblink Documentation",
        height: "40px",
        width: "40px",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "BlinkID",
              to: "/docs/blinkid/release-notes/",
            },
            {
              label: 'BlinkID Verify',
              to: 'https://blinkidverify.docs.microblink.com/',
            },
            {
              label: "BlinkCard",
              to: "/docs/blink-card/release-notes",
            },
            {
              label: "BlinkReceipt",
              to: "/docs/blink-receipt/integrations",
            },
          ],
        },
        {
          title: "Account",
          items: [
            {
              label: "Sign In",
              href: "https://developer.microblink.com/register",
            },
            {
              label: "Sign Up",
              href: "https://developer.microblink.com/register",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Supported Documents",
              href: "https://microblink.com/resources/full-list-of-supported-identity-documents/",
            },
            {
              label: "Contact support",
              href: "https://help.microblink.com/s/submit-request",
            },
            {
              label: "Help Center",
              href: "https://help.microblink.com/s/",
            },
            {
              label: "Contact Sales",
              href: "https://microblink.com/contact-us/",
            },
            {
              label: "Microblink.com",
              href: "https://microblink.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microblink, All rights reserved. `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["csharp", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
