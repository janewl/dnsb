import React from "react";
import { Icon, Button, Box, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/all";
import { motion } from "framer-motion";

const ArrowBtn = (props) => {
  return (
    <Link as={ReachLink} to="/about">
      <Button variant="line" marginTop="20px">
        <Box w="3em">
          <motion.div
            animate={{ x: [-20, 8, -20] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              loop: Infinity,
            }}
          >
            <Icon as={BsArrowRight} boxSize={8} />
          </motion.div>
        </Box>
        {props.title}
      </Button>
    </Link>
  );
};

export default ArrowBtn;
