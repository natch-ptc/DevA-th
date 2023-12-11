"use client";

import { HStack, Stack, Text } from "@chakra-ui/react";
import { title } from "process";
import { DevaTag } from "./DevaTag";

export type DevaProjectBoxProps = {
  name: string;
  description: string;
  tags: string[];
};

export const DevaProjectBox = (props: DevaProjectBoxProps) => {
  const { name, description, tags } = props;

  return (
    <Stack>
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
  );
};
