import React from "react";
import ParallaxBg from "../components/ParallaxBg";
import About from "../components/About";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box className="hero">
        <ParallaxBg />
      </Box>
      <Box className="about-section">
        <About />
      </Box>
    </>
  );
};

export default Home;
