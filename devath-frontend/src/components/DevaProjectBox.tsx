"use client";

import { HStack, Image, Link, Stack, Text } from "@chakra-ui/react";
import { title } from "process";
import { DevaTag } from "./DevaTag";
import { default as NextLink } from "next/link";

export type DevaProjectBoxProps = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
};

export const DevaProjectBox = (props: DevaProjectBoxProps) => {
  const { name, description, tags, image, href } = props;

  return (
    <Link href={href} as={NextLink}>
      <Stack>
        <Image
          src={image}
          h="60vh"
          w={["100vw", "40vw", "40vw", "40vw"]}
          objectFit="cover"
        />
        <Stack>
          <Text fontSize="3xl" fontWeight="300">
            {name}
          </Text>
          <Text>{description}</Text>
        </Stack>
        <Stack direction="row">
          {tags.map((tag, i) => (
            <DevaTag label={tag} size="sm" key={`${tag}_${i}`} />
          ))}
        </Stack>
      </Stack>
    </Link>
  );
};
