import {
  FounderDisplayData,
  FoundersList,
  SocialMediaIcons,
} from "@/components";
import {
  getAllFoundersData,
  getFounderData,
} from "@/utils";
import { HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import startCase from "lodash/startCase";

export default async function Founder({
  params,
}: {
  params: { name: string };
}) {
  const {
    name,
    content,
    nickname,
    position,
    quote,
    facebook,
    instagram,
    twitter,
    linkedIn,
    website,
  } = await getFounderData(params.name);
  const allFounders = await getAllFoundersData()
    .filter((founder) => founder.name !== params.name)
    .map(
      (founder) =>
        ({
          name: founder.name,
          nickname: startCase(founder.nickname),
          pictureSrc: `/founders/img/${founder.name}.png`,
          position: founder.position,
        } as FounderDisplayData)
    );

  return (
    <Stack>
      <Stack gap={12} minH="80vh" mb={16}>
        <HStack
          justify="space-between"
          w="100%"
          align="center"
          flexWrap="wrap"
          gap={6}
        >
          <VStack align="flex-start" gap={0}>
            <Heading fontWeight="400" fontSize="xxx-large">
              {startCase(nickname)}
            </Heading>
            <Text fontSize="large">{position}</Text>
          </VStack>
          <SocialMediaIcons
            linkedInLink={linkedIn}
            facebookLink={facebook}
            twitterLink={twitter}
            instagramLink={instagram}
            websiteLink={website}
          />
        </HStack>
        <Stack
          w="100%"
          gap={16}
          flexDir={["column", "column", "row", "row"]}
          align={["center", "center", "flex-start", "center"]}
        >
          <Image
            src={`/founders/img/${name}.png`}
            alt={name}
            h="50vh"
            objectFit="cover"
          />
          <Stack gap={12}>
            <Text fontSize="x-large">{quote}</Text>
            <Stack>
              <Heading fontWeight="400">Life at DevA</Heading>
              <Text wordBreak="break-word">{content}</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <FoundersList items={allFounders} />
      </Stack>
    </Stack>
  );
}
