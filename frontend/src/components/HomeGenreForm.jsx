import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Stack,
  Button,
  Grid,
  FormControl,
  useColorMode,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios"


function HomeGenreForm() {
  const { colorMode, toggleColorMode } = useColorMode('black', 'white');

  const [selectedGenre, setSelectedGenre] = useState([]);
  const [genres,setGenres] = useState([])

  useEffect(()=>{
    const data = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
    setGenres(data)
    
    // axios.defaults.baseURL = 'http://localhost:3000';
    // axios.get('/genres').then((result) => {
    //   setGenres(result.data.genres)
    //   console.log(result.data.genres)
    // }).catch((err) => {
    //   console.error(err)
    // });
  },[])
  
  const navigate = useNavigate()

  //  handle genre selection
  const handleGenreSelection = (genre) => {
    const genreExists = selectedGenre.includes(genre)
    genreExists ? setSelectedGenre(selectedGenre.filter((single_genre)=>genre!==single_genre)) : setSelectedGenre([...selectedGenre,genre]);
  };

  const handleSubmit = () => {
    const prefGenres = JSON.stringify(selectedGenre)
    localStorage.setItem('pref_genres',prefGenres)
    navigate('/feed')
  }

  console.log(selectedGenre)

  return (
    <Box p={0} m={0} h={"100%"} width={{ base: '100%', md: '50%' }}>

      <Stack px={{ base: '5%', md: '15%' }} h={'80%'} justifyContent={'space-around'}>
        <Heading
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          fontFamily={'body'}
          fontWeight={900}
          pt={{base:'12',md:'24'}}
        >
          What are you into?
        </Heading>
        <Grid pt={10} templateColumns={{ base: 'repeat(2,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(2,1fr)', xl: 'repeat(4,1fr)' }} rowGap={{ base: '2', md: '12' }} columnGap={'5'}>
          {genres.map((genre) => {
            console.log(`Genre- ${genre} State-${selectedGenre}`)
            return (
              <Button
                w={'100%'}
                px={5}
                py={8}
                rounded={'xl'}
                backgroundColor={selectedGenre.includes(genre) ? (colorMode === 'light' ? 'blue.200' : 'blue.800') : (colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200')}
                onTouchStart={() => handleGenreSelection(genre)}
                fontWeight={'100'}
                fontSize={{sm:'md',md:'md'}}
                onClick={() => handleGenreSelection(genre)}
              >
                {genre.name}
              </Button>
            );
          })}
        </Grid>
        <FormControl>
        <Button  w={{ base: '100%', xl: '50%' }} mt={5} px={5} py={8} mb={10} bgColor={useColorModeValue('blackAlpha.900', 'white')} color={useColorModeValue('white', 'blackAlpha.700')} onClick={handleSubmit}>
          Next
        </Button>
        </FormControl>
      </Stack>
      
    </Box>

);

}

export default HomeGenreForm;
