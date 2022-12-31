import { Box, ChakraProvider } from "@chakra-ui/react";

import { withReactIntl, withReactQuery } from "utils/storybook";

import { ToggleModeButton } from "../shared/Layout";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withReactIntl(),
  withReactQuery(),
  (story: any) => (
    <ChakraProvider>
      <Box position="absolute" top="12px" right="12px">
        <ToggleModeButton />
      </Box>
      {story()}
    </ChakraProvider>
  ),
];
