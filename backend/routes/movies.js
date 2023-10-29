import axios from "axios";
import { Router } from "express";
import dotenv from "dotenv";

const movieRouter = Router();

dotenv.config();
axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.API_KEY}`;
axios.defaults.headers.common["Accept"] = "application/json";


const sendDataFromAPIURL = (url,res) => {
    axios.get(url).then((result) => {
        res.json(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
}

movieRouter.get("/genres", (req, res) => {
  const url = "https://api.themoviedb.org/3/genre/movie/list";
  sendDataFromAPIURL(url,res)
});

movieRouter.get("/explore/:genreid", (req, res) => {
  const genreId = req.params.genreid;
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;
  sendDataFromAPIURL(url,res)
});

movieRouter.get("/movie/:movieid", (req, res) => {
  const movieId = req.params.movieid;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  sendDataFromAPIURL(url,res)
});

export default movieRouter;
