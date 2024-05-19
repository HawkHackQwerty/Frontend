import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import job from '../assets/job.png';

function Resume() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [feedback, setFeedback] = useState("");

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
    // recieve the feedback and the score on the resume here and then give it 
    // this is where it will set the feedback to whatever the api call retreives and it will make it work!

    console.log("Submitting PDF:", pdfUrl);
    // For example, set feedback to some value after submission
    setFeedback("Thank you for your submission!");
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
          paddingLeft: '3vw', // Move to the left
        }}
      >
        <Box>
          <Box width="800px" height="750px" marginBottom="100px" my="auto">
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

        {feedback && (
          <Box
            width="500px"
            height="700px"
            backgroundColor="white"
            border="1px solid gray"
            boxShadow="md"
            borderRadius="md"
            p="4"
            position="absolute"
            top="55%"
            right="12vw"
            transform="translateY(-50%)"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4">Score: { score }</Text>
            <Text>{feedback}</Text>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default Resume;
