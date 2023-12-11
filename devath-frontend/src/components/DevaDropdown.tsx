"use client";

import { Button, HStack, Text } from "@chakra-ui/react";

export type DevaDropdownSizes = "sm" | "md";
export type DevaDropdownProps = {
  label: string;
  size?: DevaDropdownSizes;
};

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const DevaDropdown = (props: DevaDropdownProps) => {
  const { label, size = "md" } = props;

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        px={18}
        py={1}
        w="fit-content"
        border="1px solid"
        borderColor="content.primary"
        borderRadius={30}
        bgColor="background.primary"
        color="content.primary"
        rightIcon={<ChevronDownIcon boxSize="24px" />}
        _hover={{
          color: "background.primary",
          bgColor: "content.primary",
        }}
        _active={{
          color: "background.primary",
          bgColor: "content.primary",
        }}
      >
        Tag
      </MenuButton>
      <MenuList bgColor="background.primary">
        <MenuOptionGroup type="checkbox" bgColor="background.primary">
          <MenuItemOption value="email" bg="none">
            Product
          </MenuItemOption>
          <MenuItemOption value="phone" bg="none">
            AI
          </MenuItemOption>
          <MenuItemOption value="country" bg="none">
            Award
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
