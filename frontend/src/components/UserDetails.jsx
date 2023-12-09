import React, { useParams } from 'react'

import { Flex, Stack, Heading, Divider, Text, Image, Badge, Card } from '@chakra-ui/react';
import UserDetailItem from './UserDetailItem';



function UserDetails(props) {
    const params = useParams()


if (props.userDataLoaded) {
    return (
        <Stack direction={'row'} w={'100'} >
            <Flex w={{ base: '50%', md: '70%' }} h={'fit-content'} direction={'column'} mx={{ base: 5, md: 10 }}>
                <Card fontWeight={'bold'} fontFamily={'heading'} w={'fit-content'} py={2} px={5} my={5} textAlign={'center'} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>Profile</Card>
                <Divider w={'50%'} />
                <UserDetailItem itemTitle={'Name'} itemValue={`${props.userData.firstname} ${props.userData.lastname}`} dataLoaded={props.userDataLoaded} />
                <UserDetailItem itemTitle={'Username'} itemValue={`${props.userData.username}`} dataLoaded={props.userDataLoaded} />
                <UserDetailItem itemTitle={'Email Address'} itemValue={`${props.userData.email}`} dataLoaded={props.userDataLoaded} />
            </Flex>
            <Flex w={'30%'} direction={'column'}>
                <Flex w={'100%'} justifyContent={'center'} h={{ base: "fit-content", md: "fit-content" }} my={5}>
                    <Image src="/pfp.JPG" borderRadius={'full'} objectFit={'contain'} dropShadow={'dark-lg'} w={{ base: '100%', md: '45%' }}></Image>
                </Flex>
                <Flex w={'100%'} justifyContent={'start'} h={"35%"} my={5} direction={'column'}>

                    <Heading textAlign={'center'} fontSize={{ base: 'lg', md: '4xl' }}>Interests</Heading>
                    <Flex w={{ base: '100%', md: '75%' }} justifyContent={'center'} my={5} gap={{ base: 2, md: 5 }} alignSelf={'center'} wrap={'wrap'} direction={'row'}>
                        <Badge variant='outline' w={'fit-content'} fontSize={{ base: '2xs', md: 'md' }} cursor={'pointer'}>
                            Thriller
                        </Badge>

                        <Badge variant='outline' w={'fit-content'} fontSize={{ base: '2xs', md: 'md' }} cursor={'pointer'}>
                            Thriller
                        </Badge>

                        <Badge variant='outline' w={'fit-content'} fontSize={{ base: '2xs', md: 'md' }} cursor={'pointer'}>
                            Thriller
                        </Badge>

                        <Badge variant='outline' w={'fit-content'} fontSize={{ base: '2xs', md: 'md' }} cursor={'pointer'}>
                            Thriller
                        </Badge>

                        <Badge variant='outline' w={'fit-content'} fontSize={{ base: '2xs', md: 'md' }} cursor={'pointer'}>
                            Thriller
                        </Badge>
                    </Flex>
                </Flex>
            </Flex>
        </Stack>
    )
}
else {
    return(
        <Stack direction={'row'} w={'100'} >
        <Flex w={{ base: '50%', md: '70%' }} h={'fit-content'} direction={'column'} mx={{ base: 5, md: 10 }}>
            <Text fontSize={'2xl'}>{`User`} <strong>{params.username}</strong> {`was not found!`}</Text>
        </Flex>

    </Stack>
    )
}
            
}



export default UserDetails