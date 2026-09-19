import { Router } from "express";
import { getMainGamesPage, getNewGamesPage, postNewGame } from "../controllers/gamesController.js";

const gamesRouter = Router()

gamesRouter.get("/",getMainGamesPage)

gamesRouter.get("/new",getNewGamesPage)

gamesRouter.post("/new",postNewGame)

export default gamesRouter