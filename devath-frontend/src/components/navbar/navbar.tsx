"use client";

// Navbar.tsx
import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { default as NextLink } from "next/link";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Box
      position="fixed"
      width="100%"
      zIndex="1000"
      transition="top 0.3s"
      top={visible ? "0" : "-60px"}
    >
      <Flex
        bg={useColorModeValue("#111111", "#FFFFFF")} //block color
        color={useColorModeValue("#FFFFFF", "#111111")} //the alphabet color inside block
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("#111111", "#FFFFFF")} // border color of the block
        align={"center"}
        justify="space-between"
      >
        {/* Left side with logo */}
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "left", md: "start" }}
          align="center"
        >
          <Box boxSize="auto">
            <Link href="/" as={NextLink}>
              <Image
                src="/icons/deva.png"
                alt="DevA"
                htmlHeight="30px"
                htmlWidth="120.54px"
                padding="15px"
              />
            </Link>
          </Box>
        </Flex>

        {/* Hamburger Icon (visible on smaller screens) */}
        <Flex display={{ base: "flex", md: "none" }} align="center" pr={4}>
          <IconButton
            onClick={onToggle}
            _hover={{}}
            _active={{}}
            icon={
              isOpen ? (
                <CloseIcon boxSize="24px" color="#FFFFFF" /> // This color of close icon when zoom in
              ) : (
                <HamburgerIcon boxSize="24px" color="#FFFFFF" /> // This color of hamburger icon when zoom in
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {/* Right side with navigation links (visible on larger screens) */}
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      {/* Mobile Navigation (visible on smaller screens) */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("#FFFFFF", "#750E21"); // navbar label element color (not zoom-in)
  const linkHoverColor = useColorModeValue("#FF3434", "#1640D6"); // navbar label element color when hover (not zoom-in)
  const popoverContentBgColor = useColorModeValue("#0E121E", "#706233"); // block when hover label element

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"16px"}
                fontWeight={500}
                color={linkColor}
                padding={"15px"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#073869", "gray.900") }} //This is highlight Color when hover sub label inside the box
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            fontSize={"16px"}
            _groupHover={{ color: useColorModeValue("#FF3535", "gray.900") }} // This is alphabet Color when hover sub label inside the box
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"14px"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#FFFFFF"} w={5} h={5} as={ChevronRightIcon} />{" "}
          {/*Color of icon right > when zoom out*/}
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("#111111", "gray.800")}
      px={8}
      pb={4}
      display={{ md: "none" }}
      fontSize={"16px"}
      borderBottom="1px solid"
      borderColor="content.primary"
    >
      {" "}
      {/*Block color when zoom in (it's a menu block!!)*/}
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, subLabel }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Flex>
          <Text
            fontWeight={600}
            color={useColorModeValue("#FFFFFF", "gray.200")}
          >
            {" "}
            {/*This is an alphabet color for label when zoom in*/}
            {label}
          </Text>

          {children && (
            <Icon
              as={ChevronDownIcon}
              color="#FFFFFF" /*Color of icon right > when zoom in*/
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("#FF3535", "gray.700")} //this is line color
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={2}
                href={child.href}
                color={useColorModeValue("#FFFFFF", "gray.700")} // This is a text color sublabel + subsublabel when zoom in
                display={"block"}
                role={"group"}
                _hover={{ bg: useColorModeValue("#073869", "gray.900") }} //This is a highlight color sublabel when hover and zoom in
              >
                <Stack direction={"row"} align={"center"}>
                  <Box>
                    <Text
                      transition={"all .3s ease"}
                      fontSize={"16px"}
                      _groupHover={{
                        color: useColorModeValue("#FF3535", "gray.900"),
                      }} //This is text color sublable when hover and zoom in
                      fontWeight={500}
                    >
                      {child.label}
                    </Text>
                    <Text fontSize={"14px"}>{child.subLabel}</Text>
                  </Box>
                  <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                      opacity: "100%",
                      transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                  >
                    <Icon color={"#FFFFFF"} w={5} h={5} as={ChevronRightIcon} />{" "}
                    {/*Color of icon right > when zoom in*/}
                  </Flex>
                </Stack>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export default Navbar;

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Project",
    href: "/project",
  },
  {
    label: "Founder",
    children: [
      {
        label: "Pichyapa",
        subLabel: "Front-end Developer",
        href: "/founders/pichyapa",
      },
      {
        label: "Ruedhaidham",
        subLabel: "UX Engineer",
        href: "/founders/ruedhaidham",
      },
      {
        label: "Folk",
        subLabel: "ML Engineer",
        href: "/founders/sakolkrit",
      },
      {
        label: "Earn",
        subLabel: "Robotic Engineer, Business and Marketing",
        href: "/founders/yapar",
      },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
