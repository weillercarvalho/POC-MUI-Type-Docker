import express from "express";
import { homeController } from "../controllers/homeController.js";
const homerouter = express.Router();

homerouter.get("/home", homeController);

export { homerouter };
