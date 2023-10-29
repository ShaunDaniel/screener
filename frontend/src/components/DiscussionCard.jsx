import React from 'react'
import { Flex, Text, Stack, Heading,useColorModeValue, Card, Divider} from '@chakra-ui/react'


function DiscussionCard() {
  return (
    <Flex w={"100%"} justifyContent={'center'} mt={5}>
        <Card p={5} w={"95%"} mx={{ base: 0, md: 28 }} alignItems={{ base: 'center', md: 'start' }}>
          <>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} color={useColorModeValue('blue.900')} fontFamily={'heading'} fontWeight={'bold'}>Discussion Threads</Heading>
            <Divider w={"25%"} my={5} textAlign={'s'}></Divider>
          </>
          <Flex w={'full'} h={"auto"} direction={'column'}>
            <Stack direction='row' h='100px' p={{ base: 1, md: 4 }}>
              <Divider orientation='vertical' />
              <Flex direction={'column'}>
                <Text fontWeight={'medium'} fontFamily={'heading'}>username</Text>
                <Text>kinda mid</Text>
              </Flex>
            </Stack>
            <Stack direction='row' h='100px' p={{ base: 1, md: 4 }}>
              <Divider orientation='vertical' />
              <Flex direction={'column'}>
                <Text fontWeight={'medium'} fontFamily={'heading'}>username</Text>
                <Text>This is a sample movie opinion.</Text>
              </Flex>
            </Stack>
          </Flex>

        </Card>
      </Flex>
  )
}

export default DiscussionCard