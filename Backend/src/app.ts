import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { signrouter } from "./routers/signRouter.js";
import { homerouter } from "./routers/homeRouter.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(signrouter);
server.use(homerouter);

server.listen(process.env.PORT, () => {
    console.log(`Listening on the ${process.env.PORT}`)
})

