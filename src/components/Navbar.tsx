import {
ChakraProvider,
Heading,
Container,
Text,
Avatar
} from "@chakra-ui/react";
import { useState } from 'react'
import funny from '../assets/funny.jpg' 


function Navbar() {

return (
    <>
    <ChakraProvider>
    <div style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", display: "flex", alignItems: "center", width: "100vw", height: "9vh", background: "linear-gradient(to bottom, #87CEEB, #ADD8E6)" }}>
        <Heading style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }} marginLeft={ "15px" }>AImploy</Heading>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "9vw" }} >
            <Avatar src={funny} style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
            <Heading size="xs" style={{ marginTop: "4px", marginLeft: "auto", marginRight: "auto" }}>Fahmi Omer</Heading>
        </div>
      </div>
    </ChakraProvider>
    </>
)
}

export default Navbar