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
import "./RecordView.css";
import Navbar from "./Navbar";
import Resume from "./Resume";
import Letter from "./Letter";
import JobUpload from "./jobUpload";
import Interview from "./interview";
import PageSeparator from "./pageSep";

function UserPage() {

    return (
        <>
        <ChakraProvider>
        <Navbar />
        <JobUpload />
        <PageSeparator />
        <Resume />
        <PageSeparator />
        <Letter />
        <PageSeparator />
        <Interview />
        </ChakraProvider>
        </>
    )
}

export default UserPage;