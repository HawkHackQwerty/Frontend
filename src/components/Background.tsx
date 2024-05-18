import {
  ChakraProvider,
  Text,
  Box
} from "@chakra-ui/react";
import job from '../assets/job.png'


function Background() {

  return (
    <>
      <ChakraProvider>
        <Box sx={{
          width: '100vw',
          height: '91vh',
          backgroundImage: job,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: '10vw',
        }} >

          <Text marginTop="100px" fontSize="5xl" fontFamily="body">Welcome to Mesh-Mesh!</Text>

        </Box>
      </ChakraProvider>
    </>
  )
}

export default Background
