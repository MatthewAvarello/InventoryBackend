import { Router } from "express";
import { getMainGamesPage, getNewGamesPage } from "../controllers/gamesController.js";

const gamesRouter = Router()

gamesRouter.get("/",getMainGamesPage)

gamesRouter.get("/",getNewGamesPage)

export default gamesRouter