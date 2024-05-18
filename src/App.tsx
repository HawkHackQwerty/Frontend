import { SettingsIcon } from '@chakra-ui/icons' 
import { ChakraProvider, IconButton, Button } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'

export const App = () => {
  return (
    <>
    <Box bg='gray' w='100%' p={15} h={70} pl={1320} color='white'> 
    <ChakraProvider>
    <Tooltip hasArrow label='settings' bg='gray.300' color='black'>
      <IconButton
      isRound={true}
      variant='solid'
      colorScheme='blue'
      aria-label='Done' 
      fontSize='30px'
      icon={<SettingsIcon />} />
    </Tooltip>
    <Box h={1}>
    <Avatar src='https://bit.ly/broken-link' />
    </Box>
    </ChakraProvider>
    </Box>
    </>
  )
}