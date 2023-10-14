import React from 'react'
import HomeBanner from '../components/HomeBanner';
import HomeGenreForm from '../components/HomeGenreForm'
import {Stack} from '@chakra-ui/react';

function Home() {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} height={'100%'}>
          <HomeBanner/>
          <HomeGenreForm />
    </Stack>
  )
}

export default Home