import {
  ChakraProvider,
  Heading,
  Container,
  Text
} from "@chakra-ui/react";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Resume from "./components/Resume";
import RecordView from "./components/VideoRecorder";


function App() {

  return (
    <>
    <Navbar />
    <Resume />
    </>
  )
}

export default App

