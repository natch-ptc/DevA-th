import { DevaTag } from "@/components";
import { ContactSection } from "@/components/contact/ContactSection";
import Navbar from "@/components/navbar/navbar";
import {
  HStack,
  Heading,
  HeadingProps,
  Image,
  ListItemProps,
  ListProps,
  Stack,
  Text,
  TextProps,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Markdown from "react-markdown";

const Heading3 = (props: HeadingProps) => (
  <Heading as="h3" fontSize="xl" {...props} />
);

const StyledText = (props: TextProps) => <Text {...props} />;

const StyledList = (props: ListProps) => <UnorderedList {...props} pl={4} />;
const components = {
  h3: Heading3,
  p: StyledText,
  ul: StyledList,
};

export default async function Project({ params }: { params: { id: string } }) {
  const projectInfo = await axios
    .get(
      `https://devath-cms-b070dc3bda56.herokuapp.com/api/blogs/${params.id}?populate=*`
    )
    .then((res) => res.data.data.attributes);

  const tags = projectInfo.tags.data.map(
    (t: any) => t.attributes.name
  ) as string[];

  const images = projectInfo?.content?.data?.map((img) => img.attributes.url);

  return (
    <Stack gap={0} spacing={0}>
      <Navbar />
      <Stack
        top="0"
        right="0"
        px={[10, 16]}
        pt={24}
        gap={4}
        bgColor="background.primary"
        color="content.primary"
        minH="100vh"
        overflow="scroll"
      >
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="300">
          {projectInfo.blogTitle}
        </Text>
        <HStack flexWrap="wrap">
          {tags.map((tag, i) => (
            <DevaTag label={tag} size="sm" key={`${tag}_${i}`} />
          ))}
        </HStack>
        <HStack align="center" h="60vh" overflowX="scroll" gap={4} pt={4}>
          <Image
            src={projectInfo.coverImg?.data?.attributes?.url}
            w="100%"
            h="100%"
            objectFit="contain"
          />
          {images.map((img) => (
            <Image src={img} key={img} w="100%" h="100%" objectFit="contain" />
          ))}
        </HStack>
        <Stack>
          <Stack mt={8}>
            <Markdown components={components}>{projectInfo.customer}</Markdown>
          </Stack>
          <Stack mt={8}>
            <Markdown components={components}>{projectInfo.challenge}</Markdown>
          </Stack>
          <Stack mt={8}>
            <Markdown components={components}>{projectInfo.solution}</Markdown>
          </Stack>
          <Stack mt={8}>
            <Markdown components={components}>
              {projectInfo.technologyAndTools}
            </Markdown>
          </Stack>
          <Stack mt={8}>
            <Markdown components={components}>
              {projectInfo.cooperation}
            </Markdown>
          </Stack>
        </Stack>
      </Stack>
      <ContactSection />
    </Stack>
  );
}
