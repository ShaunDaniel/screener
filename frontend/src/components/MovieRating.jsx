import { Stack, Text,Flex, Heading,Card } from '@chakra-ui/react'
// import Rating from './Rating'
import React from 'react'

function MovieRating() {
  return (
    <Stack>
      <Card mx={{ base: 5, md: '28' }} mt={{ base: 5, md: 10 }}>
      <Flex p={5} direction={'column'} gap={5} w={'100%'} alignItems={{ base: 'center', md: 'start' }}>
        <Heading>Rate this movie</Heading>
        {/* <Rating/> */}
      </Flex>
      </Card>
    </Stack>
  )
}

export default MovieRating