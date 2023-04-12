import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Builder from "@/components/Builder";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [otp, setOtp] = React.useState("your reg");
  const [globalPlateSize, setGlobalPlateSize] =
    React.useState("Standard UK Car");
  const [globalMaterial, setGlobalMaterial] = React.useState("Standard");
  return (
    <>
      <Flex>
        <Sidebar
          setGlobalMaterial={setGlobalMaterial}
          setOtp={setOtp}
          setGlobalPlateSize={setGlobalPlateSize}
        />
        <Builder
          otp={otp}
          globalPlateSize={globalPlateSize}
          globalMaterial={globalMaterial}
        />
      </Flex>
    </>
  );
}
