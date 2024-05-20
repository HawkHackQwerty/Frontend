import { ChakraProvider, Box, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import job from '../assets/job.png';
import { Link } from 'react-router-dom';
import axios from "axios";
import Navbar from "./Navbar";

function Letter() {
  const [pdfFile, setPdfFile] = useState(null); // State variable to store the PDF file
  const [newCv, setNewCv] = useState(null); // State variable to store the new cover letter
  const [isRecording, setIsRecording] = useState(false); // State for recording indicator

  const onFileDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPdfFile(file); // Set the PDF file directly
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onFileDrop });

  const handleReplacePdf = () => {
    setPdfFile(null); // Clear the current PDF
  };

  const handleSubmitPdf = async () => {
    console.log("Submitting PDF:", pdfFile);
  
    if (!pdfFile) {
      console.error("No PDF file provided");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("file", pdfFile);
  
      const response = await axios.post("http://127.0.0.1:5000/letter", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Assuming the response contains the new cover letter, set it to the newCv state
      setNewCv(response.data.new_letter);
    } catch (error) {
      console.error("Error submitting PDF:", error);
      setNewCv("There was an error submitting your PDF.");
    }
  };

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <ChakraProvider>
      <Navbar />
      <Box
        sx={{
          width: '100vw',
          height: '91vh',
          backgroundImage: `url(${job})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '3vw', // Move to the left
        }}
      >
        <Box>
        <Text fontSize="3xl" fontWeight="bold" mb="10px">Cover Letter Editing</Text>
          <Box width="800px" height="750px" marginBottom="100px" my="auto">
            {pdfFile ? (
              <iframe src={URL.createObjectURL(pdfFile)} title="Uploaded PDF" width="100%" height="100%" frameBorder="0" />
            ) : (
              <Box {...getRootProps()} textAlign="center" border="2px" borderRadius="md" p="20px" cursor="pointer">
                <input {...getInputProps()} accept=".pdf" />
                {isDragActive ? (
                  <Text>Drop the PDF file here ...</Text>
                ) : (
                  <Text>Upload The PDF File here!</Text>
                )}
              </Box>
            )}
          </Box>
          <Button marginTop="30px" width="350px" mx="auto" colorScheme="teal" onClick={handleReplacePdf}>Replace PDF</Button>
          <Button marginTop="30px" width="350px" float="right" mx="auto" colorScheme="teal" onClick={handleSubmitPdf}>Submit PDF</Button>
        </Box>

        {newCv && (
          <Box
            width="700px"
            height="800px"
            backgroundColor="white"
            border="1px solid gray"
            boxShadow="lg"
            borderRadius="md"
            p="6"
            position="absolute"
            top="53%"
            right="5vw"
            transform="translateY(-50%)"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text fontSize="2xl" fontWeight="bold" mb="4">Your New Cover Letter!</Text>
            <Text textAlign="center">{newCv}</Text>
          </Box>
        )}

        <Flex
            position="absolute"
            bottom="20px"
            right="20px"
            justifyContent="flex-end"
            gap="10px"
          >
            <Button
              as={Link}
              to="/resume" // Replace with the actual path of your previous page
              colorScheme="blue"
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
            >
              Previous
            </Button>
            <Button
              as={Link}
              to="/interview" // Replace with the actual path of your next page
              colorScheme="blue"
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
            >
              Next
            </Button>
          </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Letter;
