import {
ChakraProvider,
Heading,
Container,
Text,
Avatar,
Image
} from "@chakra-ui/react";
import { useState } from 'react'
import funny from '../assets/funny.jpg' 
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
      <ChakraProvider>
        <div style={{ boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100vw", height: "9vh", background: "linear-gradient(to right, #4169E1, #ADD8E6)" }}>
        <Link to="/">
            <Image src={logo} alt="AImploy Logo" style={{ marginTop: "13px", height: "100%" }} />
        </Link>
          <div style={{ display: "flex", justifyContent: "space-around", width: "20vw", marginRight: "15px" }}>
            <a href="#features" style={{ color: "white", textDecoration: "none" }}>Features</a>
            <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
            <Link to="/login" style={{ color: "white" }}>Login</Link>
          </div>
        </div>
      </ChakraProvider>
    </>

    )
}

export default Navbar