import {
  DevaTag,
  FounderDisplayData,
  FoundersList,
  SocialMediaIcons,
} from "@/components";
import { DevaDropdown } from "@/components/DevaDropdown";
import { DevaProjectBox } from "@/components/DevaProjectBox";
import { ContactSection } from "@/components/contact/ContactSection";
import {
  founderDataType,
  getAllFounders,
  getAllFoundersData,
  getFounderData,
} from "@/utils";
import { HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import startCase from "lodash/startCase";
import { GetStaticPropsContext } from "next";
import { ST } from "next/dist/shared/lib/utils";

export default async function Founder({
  params,
}: {
  params: { name: string };
}) {
  const allFounders = await getAllFoundersData().map(
    (founder) =>
      ({
        name: founder.name,
        nickname: startCase(founder.nickname),
        pictureSrc: `/founders/img/${founder.name}.png`,
        position: founder.position,
      } as FounderDisplayData)
  );

  return (
    <Stack pos="absolute" top="0" right="0" gap="0">
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
        gap={8}
      >
        <Stack>
          <Stack direction="row" pb="1%">
            <DevaTag label="About" />
            <DevaDropdown label="Tag" />
          </Stack>

          <Stack>
            <Text fontSize="6xl" fontWeight="300">
              Yes, the world has changed
            </Text>
          </Stack>
        </Stack>

        <DevaProjectBox
          name="Neon"
          description="Generative AI for slides and presentations"
          tags={["ai", "award"]}
        />
      </Stack>

      <ContactSection />
    </Stack>
  );
}
