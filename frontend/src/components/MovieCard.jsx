import { Flex, Text, Badge, Stack, Heading, Collapse, Button, Card, Image, Skeleton, useDisclosure, useColorModeValue } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'





function MovieCard(props) {
    const { isOpen, onToggle } = useDisclosure()
    const genrecolorMode = useColorModeValue('telegram', 'teal')
    const titlecolorMode = useColorModeValue('blue.800', 'white')

    const movieRuntimeConverter = (runtime_minutes) => {
        const minutes = runtime_minutes % 60
        const hours = Math.floor(runtime_minutes / 60)
        return `${hours}h ${minutes}m`
    }

    useEffect(() => {
        setTimeout(() => {
            onToggle()
        }, 500);
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <Button onClick={onToggle} w={{ base: '80%', md: '20%' }} alignSelf={{ base: 'center', md: 'flex-start' }} mx={{ base: 0, md: 28 }} my={5}>
                {isOpen ? (<><ArrowUpIcon />Movie Info<ArrowUpIcon /></>)
                    : (<><ArrowDownIcon />Movie Info<ArrowDownIcon /></>)}
            </Button>

            <Collapse in={isOpen} animateOpacity>

                <Stack direction={{ base: 'column-reverse', md: 'row' }} h={{ base: '90vh', md: '60vh' }} w={"100%"} m={0} p={0}>
                    <Stack w={{ base: "100%", md: "80%" }} textAlign={{ base: 'center', md: 'left' }}>
                        <Flex mx={{ base: 0, md: '28' }} mt={{ base: 5, md: 10 }} direction={'column'} gap={5} w={'100%'} alignItems={{ base: 'center', md: 'start' }}>


                            {props.movieData.genres ? (
                                <Card p={5} w={"80%"}>
                                    <Heading fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} color={titlecolorMode} fontFamily={'heading'} fontWeight={'bold'}>{props.movieData.title}</Heading>
                                    <Flex mt={1} mb={3} w={'100%'} gap={2} justifyContent={{ base: 'center', md: 'start' }}>
                                        {/* genre dropdown */}
                                        {

                                            props.movieData.genres.map((genre) => (
                                                <Badge variant='outline' colorScheme={genrecolorMode} w={'fit-content'} fontSize={{ base: '2xs', md: 'md' }} cursor={'pointer'}>
                                                    {genre.name}
                                                </Badge>
                                            ))
                                        }
                                    </Flex>

                                    <Text>{`${props.movieData.release_date.split('-', 1)} • ${movieRuntimeConverter(props.movieData.runtime)} • ⭐${props.movieData.vote_average}`}</Text>
                                    <Text>-</Text>
                                    <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }} noOfLines={10} w={{ base: "100%", md: "100%", xl: '80%' }}>{props.movieData.overview}</Text>
                                </Card>
                            ) : (
                                <Skeleton p={5} w={"80%"} rounded={'2xl'} isLoaded={false}>
                                </Skeleton>
                            )}



                        </Flex>
                    </Stack>
                    <Stack >
                        <Flex w={"100%"} direction={'column'}>

                            <Skeleton mt={5} rounded={'3xl'} isLoaded={props.movieDataLoaded}>
                                <Flex w={"100%"} justifyContent={{ base: 'center', md: 'start' }} px={5}>
                                    <Image src={`https://image.tmdb.org/t/p/w500${props.movieData.poster_path}`} w={{ base: "80%", md: "70%" }} mt={5} rounded={'3xl'} />
                                </Flex>
                            </Skeleton>
                        </Flex>
                    </Stack>
                </Stack>
            </Collapse>
        </>
    )
}

export default MovieCard