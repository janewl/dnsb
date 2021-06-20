import React from "react";
import { Heading, Text, Center, Grid, GridItem } from "@chakra-ui/react";
import ArrowBtn from "./ArrowBtn";
import ParallaxImg from "./ParallaxImg";

const About = () => {
  return (
    <Grid templateColumns="repeat(2, 49vw)" maxW="100vw" h="100vh">
      <Center>
        <GridItem w="36vw" boxShadow="xl" padding="50px">
          <Heading style={{ marginBottom: "20px" }}>Vår agenda</Heading>
          <Text fontSize="xl" style={{ textAlign: "left" }}>
            Det Nye Norske Storband er et jazzensemble med fokus på å utfordre
            storband-formatet og sette storband tilbake på det musikalske
            kartet. Ensemblet ønsker å levere et musikalsk uttrykk med høy
            kvalitet og nyskapende kreativitet.{" "}
            <ArrowBtn title="Les mer om DNSB" />
          </Text>
        </GridItem>
      </Center>
      <GridItem>
        <Center h="100vh" maxW="100%">
        </Center>
      </GridItem>
    </Grid>
  );
};

export default About;
