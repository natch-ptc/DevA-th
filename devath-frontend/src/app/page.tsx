import { HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import { getAllFounders, getAllFoundersData } from "@/utils";
import startCase from "lodash/startCase";
import { DevaTag, FounderDisplayData, FoundersList } from "@/components";
import { ContactSection } from "@/components/contact/ContactSection";
import { GlassModels } from "@/components/animations/GlassModels";
import Link from "next/link";
import axios from "axios";
import { ProjectData } from "./project/page";
import { DevaProjectBox } from "@/components/DevaProjectBox";

export default async function Home() {
  const allFounders = await getAllFoundersData().map(
    (founder) =>
      ({
        name: founder.name,
        nickname: startCase(founder.nickname),
        pictureSrc: `/founders/img/${founder.name}.png`,
        position: founder.position,
      } as FounderDisplayData)
  );

  const sampleProjects = await axios
    .get(
      "https://devath-cms-b070dc3bda56.herokuapp.com/api/blogs?fields[0]=blogTitle&fields[1]=blogDesc&populate[0]=tags&populate[1]=coverImg&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=2"
    )
    .then((res) => res.data.data);

  const sampleProjectsData = sampleProjects.map(
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
    <Stack>
      <Navbar />

      <Stack
        pos="absolute"
        top="0"
        right="0"
        gap="0"
        bgColor="background.primary"
      >
        <GlassModels />
        <Stack
          w="100vw"
          h="100vh"
          top="0"
          right="0"
          justify="center"
          color="content.primary"
          pos="absolute"
          px={[10, 16]}
          pt={20}
          pb={20}
          gap={8}
        >
          <Text
            fontSize={["6.5vh", "8vh", "6vw"]}
            fontWeight="300"
            lineHeight="1.2"
          >
            Never doubt that small group of thoughtful, committed citizens can
            change the world.
          </Text>
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
          justify="center"
        >
          <DevaTag label="About" />
          <Stack direction={["column", "column", "row"]} gap={[8, 8, 16]}>
            <Stack>
              <Text fontSize={["4xl", "4xl", "5xl", "6xl"]} fontWeight="300">
                Doing the things we do every day a little bit better.
              </Text>
            </Stack>
            <Stack gap={6} pt={[0, 0, 4]}>
              <Text fontSize={["md", "md", "xl"]}>
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
          <HStack align="center" justify="space-around">
            {sampleProjectsData.map((project) => (
              <DevaProjectBox {...project} key={project.name} />
            ))}
          </HStack>
        </Stack>
        <Stack
          w="100vw"
          top="0"
          right="0"
          bgColor="background.primary"
          color="content.primary"
          px={[10, 16]}
          pt={20}
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
    </Stack>
  );
}
