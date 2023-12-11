import { HStack, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

export type FounderDisplayData = {
  name: string;
  nickname: string;
  pictureSrc: string;
  position: string;
};

export type FoundersListProps = {
  items: FounderDisplayData[];
};
const FounderItem = (props: FounderDisplayData) => {
  const { name, pictureSrc, position, nickname } = props;
  return (
    <Link
      as={NextLink}
      href={`/founders/${name}`}
      w={["95%", "25%", "25%", "25%"]}
    >
      <Stack
        w="100%"
        align="center"
        gap={4}
        flexDir={["row", "column", "column", "column"]}
      >
        <Image
          src={pictureSrc}
          alt={name}
          h={["20vh", "35vh", "35vh", "35vh"]}
          objectFit="cover"
        />
        <Stack
          align={["flex-start", "center", "center", "center"]}
          gap={0}
          w="100%"
        >
          <Heading fontSize="x-large" fontWeight="400">
            {nickname}
          </Heading>
          <Text textAlign={["left", "center", "center", "center"]}>
            {position}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};

export const FoundersList = (props: FoundersListProps) => {
  const { items } = props;
  return (
    <Stack
      flexDir={["column", "row", "row", "row"]}
      w="100%"
      align="flex-start"
      justify="center"
      gap={8}
    >
      {items.map((item) => (
        <FounderItem key={item.name} {...item} />
      ))}
    </Stack>
  );
};
