import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { signrouter } from "./routers/signRouter.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(signrouter);

server.listen(process.env.PORT, () => {
    console.log(`Listening on the ${process.env.PORT}`)
})

