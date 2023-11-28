import { Button, HStack, Image, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

export type SocialMediaIconsProps = {
  linkedInLink?: string;
  facebookLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  websiteLink?: string;
};

export const SocialMediaButton = (props: { link: string; icon: string }) => {
  const { link, icon } = props;
  return (
    <Link as={NextLink} href={link} target="_blank">
      <Button
        borderRadius="full"
        border="1px solid"
        borderColor="content.primary"
        w={2}
        p={2}
        bg="none"
        _hover={{ bg: "none" }}
      >
        <Image src={`/icons/${icon}.png`} alt={icon} />
      </Button>
    </Link>
  );
};

export const SocialMediaIcons = (props: SocialMediaIconsProps) => {
  const {
    linkedInLink,
    facebookLink,
    twitterLink,
    instagramLink,
    websiteLink,
  } = props;
  return (
    <HStack>
      {linkedInLink && (
        <SocialMediaButton link={linkedInLink} icon="linkedIn" />
      )}
      {facebookLink && (
        <SocialMediaButton link={facebookLink} icon="facebook" />
      )}
      {twitterLink && <SocialMediaButton link={twitterLink} icon="twitter" />}
      {instagramLink && (
        <SocialMediaButton link={instagramLink} icon="instagram" />
      )}
      {websiteLink && <SocialMediaButton link={websiteLink} icon="link" />}
    </HStack>
  );
};
