import {
  ChakraProvider,
  Heading,
  Container,
  Text
} from "@chakra-ui/react";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Background from "./components/Background";


function App() {

  return (
    <>
    <Navbar />
    <Background />
    </>
  )
}

export default App
