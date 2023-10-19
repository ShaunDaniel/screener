import React, { useEffect, useState } from 'react';
import { Link, Heading, Flex, Card, Spinner } from '@chakra-ui/react'; // Import Spinner component
import axios from "axios";

function MovieList (props) {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    axios.get(`https://screener-backend.onrender.com/explore/${props.genre.id}`)
      .then((result) => {
        setMovieData(result.data.results);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <Flex px={10} py={10} direction="column" >
      <Heading fontSize="3xl" fontWeight="bold" color="white">
        {`${props.genre.name} Movies`}
      </Heading>
      {loading ? ( // Render loading spinner while data is being fetched
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          mt={10}
        />
      ) : (
        <Flex spacing={4} overflowX={'scroll'} gap={4}>
          {movieData.map((movie, index) => (
            <Link key={movie.id}  href={`/movie/${movie.id}`}>
              <Card
                key={movie.id}
                borderRadius={'2xl'}
                cursor={'pointer'}
                mx={2}
                my={10}
                _hover={{ transform: 'scale(1.1)' }}
                minWidth={'xs'}
                h={'md'}
                backgroundSize={'cover'}
                backgroundImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                onClick={() => console.log("hoi")}
              >
                <Flex h={"100%"} justifyContent={'end'}>
                  <Flex bgGradient={'linear(transparent,black)'} borderRadius={'2xl'} h={"30%"} w={"100%"} alignSelf={'end'}>
                    <Heading alignSelf={'end'} mt={5} fontSize={'xl'} color={'white'} p={5}  >
                      {movie.title}
                    </Heading>
                  </Flex>
                </Flex>
              </Card>
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default MovieList;
