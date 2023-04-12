import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const Builder = () => {
  return (
    <Box w="full">
      <Text fontWeight="bold" fontSize="3xl" textAlign={"right"} mr="7" mt="5">
        Price: $0
      </Text>
    </Box>
  );
};

export default Builder;
