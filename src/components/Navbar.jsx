import React, { useEffect, useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import { useScrollDirection } from "./useScrollDirection";
import {
  Container,
  Grid,
  GridItem,
  Link,
  Center,
  Collapse,
  Text,
} from "@chakra-ui/react";

const Navigationbar = () => {
  const scrollDirection = useScrollDirection();
  const [visible, setVisible] = useState(true);

  //Show navbar when user scrolls up
  useEffect(() => {
    if (scrollDirection === "down") {
      setVisible(false);
    }
    if (scrollDirection === "up") {
      setVisible(true);
    }
  }, [scrollDirection]);

  return (
    <Collapse in={visible}>
      <Container
        maxW="100vw"
        boxShadow="lg"
        style={{ position: "fixed", top: 0, zIndex: 10, color: "white" }}
      >
        <Grid Grid templateColumns="repeat(12, 1fr)" gap={4} h="7vh">
          <GridItem colSpan={1}>
            <Center h="7vh">
              <Link as={ReachLink} to="/home">
                <Text fontSize="2xl">DNSB</Text>
              </Link>
            </Center>
          </GridItem>
          <GridItem colSpan={1} colStart={10}>
            <Center h="7vh">
              <Link as={ReachLink} to="/about">
                <Text fontSize="xl">Om DNSB</Text>
              </Link>
            </Center>
          </GridItem>
          <GridItem colSpan={1}>
            <Center h="7vh">
              <Link as={ReachLink} to="/events">
                <Text fontSize="xl">Arrangementer</Text>
              </Link>
            </Center>
          </GridItem>
          <GridItem colSpan={1} bg="#895DD0">
            <Center h="7vh">
              <Link as={ReachLink} to="/booking">
                <Text fontSize="xl">Booking</Text>
              </Link>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </Collapse>
  );
};

export default Navigationbar;
