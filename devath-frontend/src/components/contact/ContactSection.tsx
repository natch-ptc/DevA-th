"use client";

import { Box, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { DevaTag, SocialMediaIcons } from "..";
import { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  function handleSendEmail() {
    setIsEmailSent(true);
  }

  return (
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
      gap={[4, 2, 8]}
      justify="center"
      id="contact"
    >
      <DevaTag label="Contact" />
      <Stack direction={["column", "column", "row"]} gap={[16, 8, 4]}>
        <Stack w={["100%", "100%", "50%"]}>
          <Text fontSize={["4xl", "4xl", "5xl", "6xl"]} fontWeight="300">
            Let’s change the world together
          </Text>
          <Text>+66 92 595 4992, +66 98 799 3905</Text>
          <Text pb="3%">
            80/151, Krisadanakorn 29, Pathum Thani, Thailand, 12120
          </Text>
          <SocialMediaIcons
            linkedInLink="https://www.linkedin.com/company/deva-th"
            facebookLink="https://www.facebook.com/deva.passion"
            twitterLink="https://twitter.com/lifeat_deva"
            instagramLink="https://www.instagram.com/lifeat.deva/"
            websiteLink="https://medium.com/@lifeat.deva"
          />
        </Stack>
        <Stack
          px={18}
          py={1}
          w={["100%", "100%", "50%"]}
          p="3%"
          border="1px solid"
          borderColor="content.primary"
          borderRadius={10}
        >
          {isEmailSent ? (
            <Text>
              Thank you for the email, Look forward to hearing from us soon!
            </Text>
          ) : (
            <Box>
              <Text pb="3%">Hello,</Text>
              <Text pb="5%">
                My name is{" "}
                <Input
                  placeholder="Your Name"
                  border="none"
                  borderBottom="1px solid"
                  borderRadius={0}
                  px={0}
                  py={2}
                  h="16px"
                  w={`${name.length > 0 ? name.length : 8}ch`}
                  onChange={(event) => setName(event.target.value)}
                />{" "}
                and my e-mail address is{" "}
                <Input
                  placeholder="Your Email"
                  border="none"
                  borderBottom="1px solid"
                  borderRadius={0}
                  px={0}
                  py={2}
                  h="16px"
                  w={`${email.length > 0 ? email.length : 8}ch`}
                  onChange={(event) => setEmail(event.target.value)}
                />{" "}
                and I would like to discuss about
                <Textarea
                  placeholder="What you want to talk to us"
                  border="none"
                  borderBottom="1px solid"
                  borderRadius={0}
                  px={0}
                  my={2}
                  h="fit-content"
                />
              </Text>

              <DevaTag
                label="Send us email"
                size="sm"
                onClick={handleSendEmail}
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
