const { fontFamily } = require("tailwindcss/defaultTheme");
const sharedConfig = require('../main/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  presets: [sharedConfig],
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{jsx,tsx,html,md}",
    "../main/src/**/*.{jsx,tsx,html,md}",
  ],
  plugins: [],
};