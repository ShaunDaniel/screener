import React from 'react'
import {
    Box,
    Container,
    Heading,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';


function HomeBanner() {
    return (
        
        <Stack
            h={{ base: '25%', md: '90vh' }}
            w={{ base: 'full', md: '50%' }}
            backgroundSize={'contain'}
            bgImage={'bg.jpg'}
            bgSize={'cover'}
            p={0}
            m={0}
            display={{base:'none',md:'block'}}
            filter={useColorModeValue("invert(0)","invert(100)")}
>
            <Stack align={'center'} h={'100%'} justifyContent={'center'}>
                <Heading
                    fontSize={{ base: '2xl', sm: '3xl', md: '4xl', xl: '5xl' }}
                    noOfLines={2}
                    color={'white'}
                    p={5}
                    bgColor={'black'}
                    fontFamily={'heading'}
                    fontWeight={900}
                    rounded={'2xl'}
                >
                    Good Movies🎬
                    <br />
                    <span style={{ fontStyle: 'italic' }}>Great</span> Discussions🗣
                </Heading>
            </Stack>
        </Stack>
    )
}

export default HomeBanner