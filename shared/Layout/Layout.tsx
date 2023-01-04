import { ReactNode } from "react";

import { chakra, Box } from "@chakra-ui/react";

import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <chakra.main>
      <Navbar />
      <Box
        px={{ base: 3, md: 4 }}
        maxW="1400px"
        m="0 auto"
        py={{ base: 4, md: 6 }}
      >
        {children}
      </Box>
    </chakra.main>
  );
};
