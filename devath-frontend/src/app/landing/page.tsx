import {
  DevaTag,
  FounderDisplayData,
  FoundersList,
  SocialMediaIcons,
} from "@/components";
import { GlassModels } from "@/components/animations/GlassModels";
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

  return <GlassModels />;
}
