import React, { useState } from 'react';
import {
  Box,
  Heading,
  Stack,
  Grid,
  Button,
  useColorModeValue,
  FormControl,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HomeGenreFormButton from './HomeGenreFormButton';
import genres from "../data/genres.json"

function HomeGenreForm() {
  const [selectedGenre, setSelectedGenre] = useState([]);

  const navigate = useNavigate();

  const handleGenreSelection = (genre) => {
    console.log("Genre - ", genre)
    if (selectedGenre.includes(genre)) {
      setSelectedGenre(selectedGenre.filter((g) => g !== genre))
    }
    else {
      setSelectedGenre([...selectedGenre, genre])
    }

  };

  const handleSubmit = () => {
    const prefGenres = JSON.stringify(selectedGenre);
    localStorage.setItem('pref_genres', prefGenres);
    navigate('/feed');
  };

  return (
    <Box p={0} m={0} h={'100%'} width={{ base: '100%', md: '50%' }}>
      <Stack px={{ base: '5%', md: '15%' }} h={'80%'} justifyContent={'space-around'}>
        <Heading
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          fontFamily={'heading'}
          fontWeight={900}
          pt={{ base: '12', md: '24' }}
        >
          What are you into?
        </Heading>
        <Grid pt={10} templateColumns={{ base: 'repeat(2,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(2,1fr)', xl: 'repeat(4,1fr)' }} rowGap={{ base: '2', md: '12' }} columnGap={'5'}>
          {genres.map((genre) => (
            <HomeGenreFormButton
              key={genre.name}
              genre={genre.name}
              onChange={() => handleGenreSelection(genre)}
            />
          ))}
        </Grid>
        <FormControl>
          <Button w={{ base: '100%', xl: '50%' }} mt={5} px={5} py={8} mb={10} bgColor={useColorModeValue('gray.700', 'white')} color={useColorModeValue('white', 'blackAlpha.700')} onClick={handleSubmit}>
            Next
          </Button>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default HomeGenreForm;
