import { ReactNode } from "react";

import { chakra, ChakraProps } from "@chakra-ui/react";

export const Placeholder = (props: ChakraProps & { children?: ReactNode }) => (
  <chakra.div
    border="3px dashed gray"
    h="100%"
    w="100%"
    minH="100vh"
    borderRadius="md"
    {...props}
  />
);
