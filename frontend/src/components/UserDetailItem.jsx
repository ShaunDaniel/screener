import { Text,Flex,Skeleton } from '@chakra-ui/react'
import React from 'react'

function UserDetailItem(props) {
    return (
        <Flex direction={'column'} mt={5}>
            <Text fontWeight={'semibold'}>{props.itemTitle}</Text>
            <Skeleton w={"fit-content"} isLoaded={props.dataLoaded}>
            <Text w={"100%"} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>{props.itemValue}</Text>
            </Skeleton>
        </Flex>
    )
}

export default UserDetailItem