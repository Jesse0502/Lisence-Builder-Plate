import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Builder = ({
  otp,
  globalPlateSize,
  globalMaterial,
}: {
  otp: string;
  globalPlateSize: string;
  globalMaterial: string;
}) => {
  const [price, setPrice] = useState(22.98);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setOpacity(0.5);
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  }, [otp]);

  useEffect(() => {
    setOpacity(0.5);
    setTimeout(() => {
      if (globalMaterial === "Premium") {
        setPrice((i: number) => i + 20);
      }
      setOpacity(1);
    }, 300);
  }, [globalMaterial]);

  useEffect(() => {
    setOpacity(0.5);
    setTimeout(() => {
      if (globalPlateSize === "Standard UK Car - GB Badge") {
        setPrice((i) => i + 4);
      } else if (globalPlateSize === "Standard UK Car 4x4") {
        setPrice((i) => i - 10);
      } else {
        setPrice(22.98);
      }
      setOpacity(1);
    }, 300);
  }, [globalPlateSize]);
  return (
    <Box w="full" bg="blackAlpha.700" minH="100vh">
      <Box opacity={opacity} transition={"0.2s ease"}>
        <Text
          fontWeight="bold"
          fontSize="3xl"
          color="white"
          mb="20"
          textAlign={"right"}
          mr="7"
          mt="5"
        >
          Price: ${price.toFixed(2)}
        </Text>

        <NumberPlate bgColor="white" otp={otp} plateSize={globalPlateSize} />
        <NumberPlate bgColor="#F7C70F" otp={otp} plateSize={globalPlateSize} />
      </Box>
    </Box>
  );
};

const NumberPlate = ({
  bgColor,
  otp,
  plateSize,
}: {
  bgColor: string;
  otp: string;
  plateSize: string;
}) => {
  return (
    <Box mt="20">
      <Center
        fontFamily={"monospace"}
        w={
          !(plateSize === "Standard UK Car 4x4" && bgColor === "#F7C70F")
            ? "120vh"
            : "60vh"
        }
        m="auto"
        rounded="2xl"
        shadow="lg"
        alignItems={"center"}
        textAlign={"center"}
        overflow={"clip"}
        pos="relative"
        justifyContent={"space-around"}
        bg={bgColor}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255, 0.7), transparent)",
        }}
      >
        {plateSize === "Standard UK Car - GB Badge" && (
          <Flex mr="4" alignItems={"center"} flexDir={"column"}>
            <Image
              srcSet="https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
              h="auto"
              w="16"
            />
            <Text fontSize="4xl">UK</Text>
          </Flex>
        )}
        <Text
          // opacity={"0.8"}
          opacity={0.9}
          fontSize="10rem"
          my="-10"
          fontWeight={"extrabold"}
        >
          {otp.toUpperCase()}
        </Text>
      </Center>
    </Box>
  );
};

export default Builder;
