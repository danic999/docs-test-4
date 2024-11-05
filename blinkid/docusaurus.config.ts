import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "../main/plugins/tailwind-config.cjs"; // add this
import sharedConfig from "../main/docusaurus.config"

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
          sidebarPath: sharedConfig.presets[0][1].docs.sidebarPath,
          routeBasePath: sharedConfig.presets[0][1].docs.routeBasePath, 
        },
        theme: {
          customCss: sharedConfig.presets[0][1].theme.customCss
          ,
        },
      } satisfies Preset.Options,
    ],
   
  ],

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: sharedConfig.plugins[1][1].containerId,
      },
    ],
  ],
  clientModules: [
    './globalJs.js'
  ],
  themeConfig: {
    colorMode: sharedConfig.themeConfig.colorMode,
    // Replace with your project's social card
    //image: "img/docusaurus-social-card.jpg",
  
    navbar: sharedConfig.themeConfig.navbar,
    footer: sharedConfig.themeConfig.footer,
    prism: sharedConfig.themeConfig.prism,
  } satisfies Preset.ThemeConfig,
};

export default config;
