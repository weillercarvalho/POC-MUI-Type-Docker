import express from "express";
import { signInController, signUpController } from "../controllers/signController.js";
const signrouter = express.Router();

signrouter.post("/", signInController);
signrouter.post("/signup", signUpController);


export {signrouter};