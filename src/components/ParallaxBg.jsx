import React from "react";
import {
  Container,
  Heading,
  Center,
  Flex,
  Button,
  Box,
  Grid, 
  GridItem
} from "@chakra-ui/react";
import ParallaxImg from "./ParallaxImg";

const ParallaxBg = () => {
  return (
  <Grid  templateColumns="repeat(5, 1fr)" maxW="100%" w="80vw" h="100vh" position="relative">
    
    <GridItem colSpan={5}>
        <ParallaxImg />
    </GridItem>
    </Grid>
  );
};

export default ParallaxBg;
