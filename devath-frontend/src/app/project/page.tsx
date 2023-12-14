import {
  DevaTag,
  FounderDisplayData,
  FoundersList,
  SocialMediaIcons,
} from "@/components";
import { DevaDropdown } from "@/components/DevaDropdown";
import { DevaProjectBox } from "@/components/DevaProjectBox";
import { ContactSection } from "@/components/contact/ContactSection";
import Navbar from "@/components/navbar/navbar";

import { HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";

import axios from "axios";

export type ProjectData = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
};

export default async function Projects() {
  const allProjects = await axios
    .get(
      "https://devath-cms-b070dc3bda56.herokuapp.com/api/blogs?fields[0]=blogTitle&fields[1]=blogDesc&populate[0]=tags&populate[1]=coverImg"
    )
    .then((res) => res.data.data);

  const allProjectsData = allProjects.map(
    (p: any) =>
      ({
        name: p.attributes.blogTitle,
        description: p.attributes.blogDesc,
        image: p.attributes.coverImg?.data?.attributes?.url,
        tags: p.attributes.tags.data.map((t: any) => t.name),
        href: `/project/${p.id}`,
      } as ProjectData)
  ) as ProjectData[];

  return (
    <Stack bgColor="background.primary" color="content.primary">
      <Navbar />
      <Stack top="0" right="0" px={[10, 16]} pt={28} pb={10} gap={2}>
        <Stack direction="row">
          <DevaTag label="Project" />
          {/*<DevaDropdown label="Tag" />*/}
        </Stack>

        <Text fontSize="6xl" fontWeight="300">
          Yes, the world has changed
        </Text>
      </Stack>
      <HStack
        w="100%"
        px={[10, 16]}
        justify="space-between"
        flexWrap="wrap"
        gap={12}
      >
        {allProjectsData.map((project) => (
          <DevaProjectBox {...project} key={project.name} />
        ))}
      </HStack>
      <ContactSection />
    </Stack>
  );
}
