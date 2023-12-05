import { DevaTag, FoundersList } from "@/components";
import { Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function FounderLayout({ children }: { children: ReactNode }) {
  return (
    <Stack
      w="100vw"
      h="100vh"
      pos="absolute"
      top="0"
      right="0"
      bgColor="background.primary"
      color="content.primary"
      px={[10, 16]}
      pt={12}
      pb={20}
      gap={8}
      overflowY="scroll"
    >
      <DevaTag label="Founder" />
      {children}
    </Stack>
  );
}
