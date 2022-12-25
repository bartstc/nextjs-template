import { withReactIntl, withReactQuery } from "utils/storybook";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withReactIntl(), withReactQuery()];
