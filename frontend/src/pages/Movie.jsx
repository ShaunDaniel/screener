import { Flex, Text, Badge, Stack, Heading, Image, useColorModeValue, Card, useDisclosure, Collapse, Button, Divider, Skeleton } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function Movie() {

  const [movieData, setMovieData] = useState({})
  const [movieDataLoaded, setmovieDataLoaded] = useState(false)
  const { isOpen, onToggle } = useDisclosure()
  const movieId = useParams()

  useEffect(() => {
    setTimeout(() => {
      onToggle()
    }, 500);
    axios
      .get(`https://screener-backend.onrender.com/movie/${movieId.id}`)
      .then((result) => {
        console.log('result - ', result.data);
        setMovieData(result.data);
        setmovieDataLoaded(true)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);


 

  const genrecolorMode = useColorModeValue('telegram', 'teal')
  const titlecolorMode = useColorModeValue('blue.800','white')

  const movieRuntimeConverter = (runtime_minutes) => {
    const minutes = runtime_minutes % 60
    const hours = Math.floor(runtime_minutes / 60)
    return `${hours}h ${minutes}m`
  }


  return (
    <Stack direction={'column'}>
      <Button onClick={onToggle} w={{ base: '80%', md: '20%' }} alignSelf={{ base: 'center', md: 'flex-start' }} mx={{ base: 0, md: 28 }} my={5}>
        {isOpen ? (<><ArrowUpIcon />Movie Info<ArrowUpIcon /></>)
          : (<><ArrowDownIcon />Movie Info<ArrowDownIcon /></>)}
      </Button>

      <Collapse in={isOpen} animateOpacity>

        <Stack direction={{ base: 'column-reverse', md: 'row' }} h={{ base: '90vh', md: '60vh' }} w={"100%"} m={0} p={0}>
          <Stack w={{ base: "100%", md: "80%" }} textAlign={{ base: 'center', md: 'left' }}>
            <Flex mx={{ base: 0, md: '28' }} mt={{ base: 5, md: 10 }} direction={'column'} gap={5} w={'100%'} alignItems={{ base: 'center', md: 'start' }}>
              

                {movieData.genres ? (
                <Card p={5} w={"80%"}>
                <Heading fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} color={titlecolorMode} fontFamily={'heading'} fontWeight={'bold'}>{movieData.title}</Heading>
                <Flex mt={1} mb={3} w={'100%'} gap={2} justifyContent={{ base: 'center', md: 'start' }}>
                  {/* genre dropdown */}
                  {

                    movieData.genres.map((genre) => (
                      <Badge variant='outline' colorScheme={genrecolorMode} w={'fit-content'} fontSize={{ base: '2xs', md: 'md' }} cursor={'pointer'}>
                        {genre.name}
                      </Badge>
                    ))
                  }
                </Flex>

                <Text>{`${movieData.release_date.split('-', 1)} • ${movieRuntimeConverter(movieData.runtime)} • ⭐${movieData.vote_average}`}</Text>
                <Text>-</Text>
                <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }} noOfLines={10} w={{ base: "100%", md: "100%", xl: '80%' }}>{movieData.overview}</Text>
              </Card>
                ) : (
                  <Skeleton p={5} w={"80%"} rounded={'2xl'} isLoaded={false}>
                  </Skeleton>
                )}


              
            </Flex>
          </Stack>
          <Stack >
            <Flex w={"100%"} direction={'column'}>

                <Skeleton mt={5} rounded={'3xl'} isLoaded={movieDataLoaded}>
                    <Flex w={"100%"} justifyContent={{base:'center',md:'start'}} px={5}>
                  <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} w={{ base: "80%", md: "70%" }}  mt={5} rounded={'3xl'} />
                  </Flex>
                </Skeleton>
            </Flex>
          </Stack>
        </Stack>
      </Collapse>
      {/* Discussion Page */}

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
    </Stack>

  )
}

export default Movie