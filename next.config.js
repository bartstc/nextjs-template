/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://itnext.io/next-js-react-intl-add-internationalisation-to-your-nextjs-app-4f933104b1f7
  // this will tell Next to handle the subpath routing for your configured locales
  // i18n: {
  //   locales: ["en-US", "pl-PL"],
  //   defaultLocale: "en-US",
  // },
};

module.exports = nextConfig;
