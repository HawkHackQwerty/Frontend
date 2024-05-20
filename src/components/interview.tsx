import {
ChakraProvider,
Heading,
Container,
Text,
Avatar,
Box,
Button
} from "@chakra-ui/react";
import { useState } from 'react'
import job from '../assets/job.png' 
import RecordView from "./VideoRecorder";
import "./RecordView.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Interview() {

return (
    <>
    <Navbar />
    <ChakraProvider>
        <Box
            sx={{
                width: '100vw',
                height: '91vh',
                backgroundImage: `url(${job})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Center the content vertically
            }}
        >
            <RecordView />
            <Box
        position="absolute"
        bottom="20px"
        right="20px"
    >
        <Button
        as={Link}
        to="/letter" // Replace with the actual path of your previous page
        colorScheme="blue"
        bg="blue.500"
        color="white"
        _hover={{ bg: "blue.600" }}
        >
        Previous
        </Button>
        </Box>
        </Box>
    </ChakraProvider>
    </>
)
}

export default Interview