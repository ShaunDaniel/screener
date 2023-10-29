import React from 'react'
import { Stack,Image,Heading,Text,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Stack direction={'column'} w={"full"} h={"90vh"} alignItems={'center'}>
      <Image src='./404.svg' w={{base:"90%",md:"50%",xl:"30%"}} px={{base:5}}></Image>
      <Heading fontSize={{base:"3xl",md:"3xl",xl:"5xl"}} colorScheme='blackAlpha'>404 Not Found!</Heading>
      <Text textAlign={'center'}>Seems like this page doesn't exist or isn't available currently.</Text>
      <Link to={'/'}>
        <Button my={5} size={'lg'}>Go Home</Button>
      </Link>
    </Stack>
  )
}
