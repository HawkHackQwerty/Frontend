import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import job from '../assets/job.png';

function Letter() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const onFileDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setPdfUrl(fileUrl);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onFileDrop });

  const handleReplacePdf = () => {
    setPdfUrl(null); // Clear the current PDF
  };

  const handleSubmitPdf = () => {
    // Logic for submitting the uploaded PDF
    // This function will be executed when the "Submit PDF" button is clicked
    console.log("Submitting PDF:", pdfUrl);
  };

  return (
    <ChakraProvider>
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
          paddingLeft: '10vw', // Move to the left
        }}
      >
        <Box>
          <Box width="800px" height="750px" marginBottom="100px" my="auto" >
            {pdfUrl ? (
              <iframe src={pdfUrl} title="Uploaded PDF" width="100%" height="100%" frameBorder="0" />
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
      </Box>
    </ChakraProvider>
  );
}

export default Letter;
