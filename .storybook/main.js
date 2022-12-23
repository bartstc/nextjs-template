const path = require("path");
module.exports = {
  stories: [
    "../modules/**/*.mdx",
    "../modules/**/*.stories.@(js|jsx|ts|tsx)",
    "../shared/**/*.mdx",
    "../shared/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    interactionsDebugger: true,
  },
  docs: {
    docsPage: true,
  },
};
