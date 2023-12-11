import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { DevaTag, FoundersList, SocialMediaButton, SocialMediaIcons } from "..";
import {
  founderDataType,
  getAllFounders,
  getAllFoundersData,
  getFounderData,
} from "@/utils";

export const ContactSection = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      top="0"
      right="0"
      bgColor="background.primary"
      color="content.primary"
      px={[10, 16]}
      pt={12}
      pb={20}
      gap={[4, 2, 8]}
      justify="center"
    >
      <DevaTag label="Contact" />
      <Stack direction={["column", "column", "row"]} gap={[16, 8, 4]}>
        <Stack w={["100%", "100%", "50%"]}>
          <Text fontSize={["4xl", "4xl", "5xl", "6xl"]} fontWeight="300">
            Let’s change the world together
          </Text>
          <Text>+66 92 595 4992, +66 98 799 3905</Text>
          <Text pb="3%">
            80/151, Krisadanakorn 29, Pathum Thani, Thailand, 12120
          </Text>
          <SocialMediaIcons
            linkedInLink="https://www.linkedin.com/company/deva-th"
            facebookLink="https://www.facebook.com/deva.passion"
            twitterLink="https://twitter.com/lifeat_deva"
            instagramLink="https://www.instagram.com/lifeat.deva/"
            websiteLink="https://medium.com/@lifeat.deva"
          />
        </Stack>
        <Stack
          px={18}
          py={1}
          w={["100%", "100%", "50%"]}
          p="3%"
          border="1px solid"
          borderColor="content.primary"
          borderRadius={10}
        >
          <Text pb="3%">Hello,</Text>
          <Text pb="5%">
            My name is your name and my e-mail address is your email and I would
            like to discuss about what you want to talk to us.
          </Text>
          <DevaTag label="Send us email" size="sm" />
        </Stack>
      </Stack>
    </Stack>
  );
};
