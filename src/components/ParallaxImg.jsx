import React from "react";
import { Box, Heading, Center } from "@chakra-ui/react";

const ParallaxImg = () => {
  //parallax-effect in header
  window.addEventListener("scroll", function (event) {
    var topDistance = this.pageYOffset;
    var layers = document.querySelectorAll("[datatype='parallax']");
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var depth = layer.getAttribute("datadepth");
      var translate3d = "translate3d(0, " + -(topDistance * depth) + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    }
  });
  return (
    <Box className="parallax" datatype="parallax" datadepth="0.3" position="relative">
      <Box className="parallax">
        <Center h="70%">
        <Heading size="4xl" color="white">Det Nye Norske Storband</Heading>
        </Center>
      </Box>
      <Box className="parallax band-mid" datatype="parallax" datadepth="0.1"></Box>
      <Box
        className="parallax band-front"
        datatype="parallax"
        datadepth="0.5"
      ></Box>
    </Box>
  );
};

export default ParallaxImg;
