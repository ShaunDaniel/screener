import React from 'react';
import "@fontsource/merriweather"
import "@fontsource/dm-serif-text"
import {ChakraProvider,Container,} from '@chakra-ui/react';
import Home from './pages/Home';
import theme from './theme';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'full'} height={'100vh'} p={0}>
        <Home />
      </Container>
    </ChakraProvider>
  );
}

export default App;
