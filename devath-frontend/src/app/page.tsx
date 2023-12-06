"use client"; /* I got error if I not type this one on top of the page */
import { Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return <Heading color="brand.primary">
    <Navbar/> {/* add Navbar here*/}
    {/* aadd context here*/}
  </Heading>;
}
