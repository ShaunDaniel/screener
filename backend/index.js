import express from "express"
import axios from "axios"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
dotenv.config()

app.use(morgan("combined"))

app.use("/genres",(req,res)=>{

    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
    }
    };

    axios
    .request(options)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
})

app.use("/explore/:genreid",(req,res)=>{
    const genreId = req.params.genreid
    const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
    }
    };

    axios
    .request(options)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
})

app.use("/movie/:movieid",(req,res)=>{
    const movieId = req.params.movieid
    const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
    }
    };

    axios
    .request(options)
    .then(function (response) {
        res.send(response.data);
        console.log(response.data)
    })
    .catch(function (error) {
        console.error(error);
    });
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})