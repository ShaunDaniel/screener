import React from 'react'
import { Text, Box, Button, useColorMode, Flex} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function Nav() {
    const { colorMode, toggleColorMode } = useColorMode('black', 'white');

    return (
        <Box h={"10%"} bg='gray.800' color={'white'}>
            <Flex justifyContent={'space-between'}>
                <Link to={"feed"}><Text fontWeight={'bold'} fontFamily={'heading'} fontSize={'xx-large'} p={5} >screener.</Text></Link>
                <Button fontSize={'2xl'} rounded={'full'} onClick={toggleColorMode} alignSelf={'end'} m={5}>
                    {colorMode === 'light' ? '🌙' : '🌞'}
                </Button>
            </Flex>
        </Box>
    )
}

export default Nav