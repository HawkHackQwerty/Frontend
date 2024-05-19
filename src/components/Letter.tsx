import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import job from '../assets/job.png';
import axios from 'axios';

function Letter() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [new_cv, setNewCv] = useState(null); // State variable to control rendering

  const onFileDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setPdfUrl(fileUrl);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onFileDrop });

  const handleReplacePdf = () => {
    setPdfUrl(null); // Clear the current PDF
  };

  const handleSubmitPdf = async () => {
    console.log("Submitting PDF:", pdfUrl);

    if (!pdfUrl) {
      console.error("No PDF URL provided");
      return;
    }

    try {
      // MAKE THIS WORK
      const pdfBlob = await fetch(pdfUrl).then(response => response.blob());

      // Create a FormData object to send the PDF file
      const formData = new FormData();
      const pdfFile = new File([pdfBlob], "cover_letter.pdf", { type: "application/pdf" });
      formData.append("file", pdfFile);

      // Send the PDF file to the endpoint using Axios
      const response = await axios.post("your-api-endpoint", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Assuming the response contains the new cover letter, set it to the new_cv state
      setNewCv(response.data.new_cover_letter);
    } catch (error) {
      console.error("Error submitting PDF:", error);
      setNewCv("There was an error submitting your PDF.");
    }
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
          <Text>Here, you can upload your cover letter for editing! If there are any parts you would like edited, ENSURE you put</Text>
          <Text marginBottom="10px">them into curly brackets, everything outside will be left untouched!</Text>
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

        {new_cv && (
            <Box
            width="700px"
            height="850px"
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
            <Text textAlign="center">{ new_cv }</Text>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default Letter;