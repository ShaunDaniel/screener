import React from 'react';
import "@fontsource/merriweather"
import "@fontsource/dm-serif-text"
import {ChakraProvider,Container} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Nav from './components/Nav';
import theme from './theme';



function App() {
  return (
    <ChakraProvider theme={theme}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='feed' element={<Feed/>}/>
        </Routes>
    </ChakraProvider>
  );
}

export default App;
