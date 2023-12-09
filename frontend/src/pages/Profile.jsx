import { Flex, Stack, Card, Divider } from '@chakra-ui/react';
import React, { useState } from 'react';
import UserDetails from '../components/UserDetails';
import axios from "axios"
import { useParams } from 'react-router-dom';

function Profile() {
    const params = useParams()
    const [userDataLoaded, setuserDataLoaded] = useState(false)
    const [userData, setuserData] = useState([])


    axios.get(`https://screener-backend.onrender.com/user/${params.username}`).then((result) => {
        setuserDataLoaded(false)
        setuserData(result.data[0])
        setuserDataLoaded(true)
    }).catch((err) => {
        console.error(err)
    });

    return (
        <>
            <UserDetails userDataLoaded={userDataLoaded} userData={userData}/>
            <Stack direction={'row'} w={'100'} >
                <Flex w={{ base: '50%', md: '70%' }} h={'30vh'} direction={'column'} mx={{ base: 5, md: 10 }}>
                    <Card fontWeight={'bold'} fontFamily={'heading'} w={'fit-content'} py={2} px={3} my={10} textAlign={'center'} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>My Collections</Card>
                    <Divider w={'50%'} />
                </Flex>
            </Stack>
        </>

    )
}

export default Profile