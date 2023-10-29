import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.DB_URL).then((result) => {
    console.log("Connected!")
}).catch((err) => {
    console.error(err)
});

