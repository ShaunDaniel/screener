import express from "express"
import axios from "axios"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
dotenv.config()

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


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})