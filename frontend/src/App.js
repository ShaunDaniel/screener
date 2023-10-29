import React from 'react';
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/open-sans'

import {ChakraProvider} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Movie from './pages/Movie';
import Nav from './components/Nav';
import theme from './theme';



function App() {
  return (
    <ChakraProvider theme={theme}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='feed' element={<Feed/>}/>
          <Route path='movie/:id' element={<Movie/>}/>
        </Routes>
    </ChakraProvider>
  );
}

export default App;
