"use client";

import { theme } from "@/style/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import "@fontsource/prompt";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};
