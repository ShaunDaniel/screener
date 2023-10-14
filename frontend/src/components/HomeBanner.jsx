import React from 'react'
import {
    Box,
    Heading,
    Stack,
  } from '@chakra-ui/react';


function HomeBanner() {
    return (
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
        </Box>
    )
}

export default HomeBanner