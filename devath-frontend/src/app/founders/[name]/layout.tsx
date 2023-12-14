import { DevaTag, FoundersList } from "@/components";
import { ContactSection } from "@/components/contact/ContactSection";
import Navbar from "@/components/navbar/navbar";
import { Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function FounderLayout({ children }: { children: ReactNode }) {
  return (
    <Stack bgColor="background.primary">
      <Navbar />
      <Stack w="100vw" color="content.primary" px={[10, 16]} pt={24} gap={8}>
        <DevaTag label="Founder" />
        {children}
      </Stack>
      <ContactSection />
    </Stack>
  );
}
