import React from 'react';
import '@fontsource/ibm-plex-serif/index.css'
import '@fontsource/dm-serif-text/index.css'

import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Stack,
} from '@chakra-ui/react';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW={'full'}
        height={'100vh'}
        p={0}
      >
        <Stack direction={{ base: 'column', md: 'row' }} height={'100%'}>
          <Box
            h={{ base: '25%', md: '100%' }}
            w={{ base: 'full', md: '50%' }}
            backgroundSize={'contain'}
            bgImage={'bg.jpg'}
            bgSize={'cover'}
            p={0}
            m={0}
          >
            <Stack align={'center'} h={'100%'} justifyContent={'center'}>
              <Heading
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl',xl:'5xl' }}
                noOfLines={2}
                color={'white'}
                p={5}
                bgColor={'black'}
                fontFamily={'heading'}
                fontWeight={200}
                rounded={'2xl'}
              >
                Good Movies🎬
                <br />
                <span style={{fontStyle:'italic'}}>Great</span> Discussions🗣
              </Heading>
            </Stack>
          </Box>
          <Box p={0} m={0} width={'50%'}>
            <Stack p={'15%'}>
            <Heading
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontFamily={'body'}
              fontWeight={200}
            >
              What are you into?
            </Heading>
            
            </Stack>
          </Box>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
