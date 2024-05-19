import {
ChakraProvider,
Heading,
Container,
Text,
Avatar,
Box
} from "@chakra-ui/react";
import { useState } from 'react'
import job from '../assets/job.png' 
import RecordView from "./VideoRecorder";
import "./RecordView.css";

function Resume() {

return (
    <>
    <ChakraProvider>
    <Box sx={{
            width: '100vw',
            height: '91vh',
            backgroundImage: job,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
        }} > 
        <RecordView />
    </Box>
    </ChakraProvider>
    </>
)
}

export default Resume