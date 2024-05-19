import {
    ChakraProvider,
    Box,
    Input,
    Button,
    Heading,
  } from "@chakra-ui/react";
  import { useState } from 'react'
  import job from '../assets/job.png' 
  import "./RecordView.css";
  
  function JobUpload() {
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  
    const handleJobTitleChange = (event) => {
      setJobTitle(event.target.value);
      setIsSubmitDisabled(event.target.value === "" || jobDescription === "");
    };
  
    const handleJobDescriptionChange = (event) => {
      setJobDescription(event.target.value);
      setIsSubmitDisabled(event.target.value === "" || jobTitle === "");
    };
  
    const handleSubmit = () => {
      // You can implement your submission logic here
      console.log("Job Title:", jobTitle);
      console.log("Job Description:", jobDescription);
    };
  
    return (
      <ChakraProvider>
        <Box
          sx={{
            width: '100vw',
            height: '91vh',
            backgroundImage: job,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        > 
          <Box
            bg="white"
            p={8}
            borderRadius="md"
          >
            <Heading mb={4}>Job Details</Heading>
            <Input
              placeholder="Job Title"
              value={jobTitle}
              onChange={handleJobTitleChange}
              mb={4}
            />
            <Input
              placeholder="Job Description"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              mb={4}
            />
            <Button
              colorScheme="blue"
              onClick={handleSubmit}
              isDisabled={isSubmitDisabled}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </ChakraProvider>
    )
  }
  
  export default JobUpload;
  