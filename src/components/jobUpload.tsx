import {
    ChakraProvider,
    Box,
    Input,
    Button,
    Heading,
    Text,
    Flex,
    Spacer
  } from "@chakra-ui/react";
  import { useState } from 'react';
  import job from '../assets/job.png';
  import "./RecordView.css";
  import { Link } from "react-router-dom";
  import axios from 'axios';
  
  function JobUpload() {
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [submissionStatus, setSubmissionStatus] = useState(""); // State for submission status
  
    const handleJobTitleChange = (event) => {
      setJobTitle(event.target.value);
      setIsSubmitDisabled(event.target.value === "" || jobDescription === "");
    };
  
    const handleJobDescriptionChange = (event) => {
      setJobDescription(event.target.value);
      setIsSubmitDisabled(event.target.value === "" || jobTitle === "");
    };
  
    const handleSubmit = async () => {
      console.log("Job Title:", jobTitle);
      console.log("Job Description:", jobDescription);
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/jobs', {
          title: jobTitle,
          description: jobDescription
        });
  
        if (response.data === "Working!") {
          setSubmissionStatus("Received!"); // Update status to "Received!"
        }
      } catch (error) {
        console.error("Error submitting job:", error);
        setSubmissionStatus("Error submitting job."); // Update status to error message
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
            <Flex>
            <Button
              colorScheme="blue"
              onClick={handleSubmit}
              isDisabled={isSubmitDisabled}
              marginTop={ "12px" }
            >
              Submit
            </Button>
            {submissionStatus && (
              <Text style={{ display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', marginLeft: "95px"}} mt={4} color={submissionStatus === "Received!" ? "green.500" : "red.500"}>
                {submissionStatus}
              </Text>
            )}
            <Spacer />
            <Button
              as={Link}
              to="/resume"
              colorScheme="blue"
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
              marginTop={ "12px" }
            >
              Next
            </Button>
          </Flex>
          </Box>
        </Box>
      </ChakraProvider>
    );
  }
  
  export default JobUpload;
  