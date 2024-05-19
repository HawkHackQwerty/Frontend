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


function Background() {

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
            justifyContent: 'flex-start',
            paddingLeft: '10vw',
        }} > 

      <Text marginTop="100px" fontSize="5xl" fontFamily="body">Welcome to AImploy!</Text>

    </Box>
    </ChakraProvider>
    </>
)
}

export default Background