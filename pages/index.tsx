import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Builder from "@/components/Builder";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex>
        <Sidebar />
        <Builder />
      </Flex>
    </>
  );
}
