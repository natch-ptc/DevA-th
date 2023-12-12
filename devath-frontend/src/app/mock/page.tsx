import { Box, Flex, Image } from "@chakra-ui/react";

const Mock = () => {
  return (
    <Flex bg="background.primary" align="center" justify="center">
      <Image h="100vh" w="auto" src="/mock.png" />
    </Flex>
  );
};

export default Mock;
