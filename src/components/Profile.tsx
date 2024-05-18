import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Avatar,
  VStack
} from "@chakra-ui/react";
import funny from '../assets/funny.jpg';

function ProfileSettings() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(to bottom, #87CEEB, #ADD8E6)",
    },
    formContainer: {
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
      borderRadius: "8px",
      padding: "20px",
      backgroundColor: "white",
      width: "90%",
      maxWidth: "500px",
      marginTop: "20px"
    },
    avatarStyle: {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    }
  };

  return (
    <ChakraProvider>
      <Box style={styles.container}>
        <Avatar src={funny} size="xl" style={styles.avatarStyle} />
        <Flex direction="column" style={styles.formContainer}>
          <Heading as="h2" size="lg" textAlign="center" marginBottom="20px">Profile Settings</Heading>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Button colorScheme="blue" width="full" mt={4}>Update Profile</Button>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default ProfileSettings;
