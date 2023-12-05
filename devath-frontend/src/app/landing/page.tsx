import {
  DevaTag,
  FounderDisplayData,
  FoundersList,
  SocialMediaIcons,
} from "@/components";
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
        <Stack spacing={3}>
          <Text fontSize="6xl" fontWeight="300">
            Never doubt that small group of thoughtful, committed citizens can
            change the world. *Quote*
          </Text>
        </Stack>
      </Stack>

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
          <DevaTag label="About" />
          <Stack direction="row">
            <Text fontSize="6xl" fontWeight="300">
              Doing the things we do every day a little bit better.
            </Text>
            <Stack>
              <Text>
                Welcome to the forefront of innovation! 🚀 We are "DevA",
                Developer and Agile Thinker. Aspiring young entrepreneurs to
                create innovation to change the world.
              </Text>
              <Text>
                We're a team of passionate innovators dedicated to creating a
                better world through the latest trends in design, technology,
                and business. Follow us for a fast-paced, up-to-date journey
                into the exciting realms of innovation.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
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
        <DevaTag label="Project" />
      </Stack>
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
        <DevaTag label="Founder" />
        <Stack>
          <FoundersList items={allFounders} />
        </Stack>
      </Stack>
      <ContactSection />
    </Stack>
  );
}
