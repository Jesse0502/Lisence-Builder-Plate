import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Input,
  Button,
  Select,
  Center,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const Sidebar = ({
  setOtp,
  setGlobalPlateSize,
  setGlobalMaterial,
}: {
  setOtp: (otp: string) => void;
  setGlobalPlateSize: (plateSize: string) => void;
  setGlobalMaterial: (material: string) => void;
}) => {
  return (
    <Box w="80vh">
      <Box p="4">
        <Text>BUILD YOUR PLATE</Text>
        <Text>
          Welcome to our online number plate builder. Please choose the options
          below to start building your number plate from scratch:
        </Text>
      </Box>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Your Reg
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            <OtpInput
              setGlobalOtp={setOtp}
              onOtpChange={(e: any) => {
                console.log(e);
              }}
            />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Plate Size
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <PlateSize setGlobalPlateSize={setGlobalPlateSize} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Material
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Material setGlobalMaterial={setGlobalMaterial} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

const Material = ({
  setGlobalMaterial,
}: {
  setGlobalMaterial: (i: string) => void;
}) => {
  const [_, changeMaterial] = React.useState("Standard");
  return (
    <>
      <SmallNumberPlate
        name="Standard"
        changeMaterial={changeMaterial}
        selectedMaterial={_}
      />
      <SmallNumberPlate
        name="Premium"
        selectedMaterial={_}
        changeMaterial={changeMaterial}
      />
      <SmallNumberPlate
        name="Aluminium"
        selectedMaterial={_}
        changeMaterial={changeMaterial}
      />
      <Button
        mt="5"
        variant="outline"
        colorScheme="blue"
        onClick={() => {
          setGlobalMaterial(_);
        }}
      >
        Continue
      </Button>
    </>
  );
};

const SmallNumberPlate = ({
  name,
  selectedMaterial,
  changeMaterial,
}: {
  name: string;
  selectedMaterial: string;
  changeMaterial: (i: string) => void;
}) => {
  return (
    <Box mt="5">
      <Center
        fontFamily={"monospace"}
        w={"full"}
        mx="5"
        m="auto"
        rounded="2xl"
        border={selectedMaterial === name ? "3px solid black" : ""}
        shadow="lg"
        alignItems={"center"}
        textAlign={"center"}
        overflow={"clip"}
        cursor={"pointer"}
        onClick={() => {
          changeMaterial(name);
        }}
        pos="relative"
        justifyContent={"space-around"}
        bg={"#F7C70F"}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255, 0.7), transparent)",
        }}
      >
        <Text opacity={0.9} fontSize="2rem" fontWeight={"extrabold"}>
          {name.toUpperCase()}
        </Text>
      </Center>
    </Box>
  );
};

const PlateSize = ({
  setGlobalPlateSize,
}: {
  setGlobalPlateSize: (plateSize: string) => void;
}) => {
  const [plateSize, setPlateSize] = React.useState("Standard UK Car" as any);
  return (
    <Box>
      <Select onChange={(e) => setPlateSize(e.currentTarget.value)}>
        <option value="Standard UK Car">Standard UK Car</option>
        <option value="Standard UK Car - GB Badge">
          Standard UK Car - GB Badge
        </option>
        <option value="Standard UK Car 4x4">Standard UK Car 4x4</option>
      </Select>
      <Button
        mt="5"
        variant="outline"
        colorScheme="blue"
        onClick={() => {
          setGlobalPlateSize(plateSize);
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

const OtpInput = ({
  onOtpChange,
  setGlobalOtp,
}: {
  onOtpChange: (inputValue: string, index: number) => void;
  setGlobalOtp: (otp: string) => void;
}) => {
  const boxes = Array(8).fill(null);
  const inputRefs: any = useRef(boxes.map(() => React.createRef()));
  const [otp, setOtp] = React.useState(["", "", "", "", "", "", "", "", ""]);

  const handleInputChange = (e: any, index: number) => {
    const inputValue = e.target.value;
    onOtpChange(inputValue, index);
    // Update the otp state
    const otpCopy = [...otp];
    otpCopy[index] = inputValue;
    setOtp(otpCopy);
    // Move focus to the next input box
    if (inputValue !== "" && index < boxes.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };
  const handleBackspace = (e: any, index: number) => {
    // Move focus to the previous input box on backspace key press
    if (e.keyCode === 8 && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].current.focus();
    }
  };
  return (
    <>
      <Box display="flex" alignItems="center">
        {boxes.map((_, index) => (
          <Input
            key={index}
            ref={inputRefs.current[index] as any}
            type="text"
            maxLength={1}
            width="12"
            textAlign="center"
            marginRight="2"
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
          />
        ))}
      </Box>
      <Button
        mt="5"
        variant="outline"
        colorScheme="blue"
        onClick={() => {
          setGlobalOtp(otp.join(""));
        }}
      >
        Continue
      </Button>
    </>
  );
};

export default Sidebar;
