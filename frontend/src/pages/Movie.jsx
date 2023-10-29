import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Stack } from '@chakra-ui/react';


import MovieCard from '../components/MovieCard';
import DiscussionCard from '../components/DiscussionCard';

function Movie() {

  const [movieData, setMovieData] = useState({})
  const [movieDataLoaded, setmovieDataLoaded] = useState(false)
  const movieId = useParams()

  useEffect(() => {
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
  }, [movieId.id]);



  return (
    <Stack direction={'column'}>
      <MovieCard movieData={movieData} movieDataLoaded={movieDataLoaded}/>
      <DiscussionCard/>
    </Stack>

  )
}

export default Movie