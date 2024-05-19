import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Input,
  Button,
  Heading,
  useColorModeValue,

} from "@chakra-ui/react";
import Navbar from "./Navbar";
import SignOptions from "../helper/Sign";
import job from '../assets/job.png';
import { Link } from 'react-router-dom';

const Sign = () => {
  const [signState, setSignState] = React.useState<SignOptions>(SignOptions.SignUp);

  const formBackground = useColorModeValue("white", "gray.700");

  return (
    <>
    <Navbar />
    <ChakraProvider>
      <Box
        width="100vw"
        height="100vh"
        bgImage={job}
        bgPosition="center"
        bgSize="cover"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="gray.200" // Fallback color
      >
        <Flex
          p={12}
          rounded={6}
          shadow="md"
          bg={formBackground}
          width="400px"
          height="auto"
          direction="column"
          justifyContent="center"
          bgGradient="linear(to-br, white, gray.100)"
        >
          <Heading mb={6} textAlign="center">
            {signState === SignOptions.SignUp ? 'Sign Up' : 'Login'}
          </Heading>
          <Input placeholder="Email" variant="filled" mb={3} type="email" />
          <Input placeholder="Password" variant="filled" mb={6} type="password" />
          <Link to="/user">
          <Button
            colorScheme="teal"
            width="100%"
            mb={4}
            onClick={() => setSignState(SignOptions.SignUp)}
          >
            {signState === SignOptions.SignUp ? 'Sign Up' : 'Login'}
          </Button>
          </Link>
          <Link>
          <Button
            colorScheme="teal"
            width="100%"
            variant="outline"
            onClick={() => setSignState(SignOptions.SignIn)}
          >
            {signState === SignOptions.SignIn ? 'Switch to Sign Up' : 'Switch to Login'}
          </Button>
          </Link>
        </Flex>
      </Box>
    </ChakraProvider>
    </>
  );
};

export default Sign;