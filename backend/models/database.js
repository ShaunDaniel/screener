import mongoose from "mongoose";
import dotenv from "dotenv";
import { Schema } from "mongoose";

dotenv.config()
mongoose.connect(`${process.env.DB_URL}`).then((result) => {
    console.log("Connected to DB")
}).catch((err) => {
   console.error(err) 
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String, // URL to the user's profile picture
  },
  bio: {
    type: String,
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ]
});


export const Users = mongoose.model("User",userSchema)



