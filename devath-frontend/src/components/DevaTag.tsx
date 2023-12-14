import { FlexProps, HStack, StackProps, Text } from "@chakra-ui/react";

export type DevaTagSizes = "sm" | "md";
export type DevaTagProps = {
  label: string;
  size?: DevaTagSizes;
} & StackProps;

export const DevaTag = (props: DevaTagProps) => {
  const { label, size = "md", ...rest } = props;

  return (
    <HStack
      px={18}
      py={1}
      w="fit-content"
      border="1px solid"
      borderColor="content.primary"
      borderRadius={30}
      {...rest}
    >
      <Text
        color="content.primary"
        fontSize={size == "md" ? "large" : "medium"}
      >
        {label}
      </Text>
    </HStack>
  );
};
