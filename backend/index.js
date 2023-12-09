import express from "express";
import cors from "cors";
import morgan from "morgan";
import movieRouter from "./routes/movieRouter.js";
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.use('/user', userRouter);
app.use('/', movieRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
