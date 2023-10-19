import { Stack, Box,useColorMode,} from '@chakra-ui/react';
import MovieList from '../components/MovieList';

function Home() {
  const prefGenres = JSON.parse(localStorage.getItem('pref_genres'))


  return (
    <Stack direction={{ base: 'column', md: 'row' }} height={'90vh'}>
      <Box height={'100%'} w={'100%'} bgColor={useColorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200'}>
        {
          prefGenres.map((genre,index)=>(
            <MovieList genre={genre}/>  
          )
          )
        }
      </Box>
    </Stack>
  );
}

export default Home;
