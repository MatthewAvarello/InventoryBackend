import { Router } from "express";
import { deleteGame, getMainGamesPage, getNewGamesPage, getSpecificGame, postNewGame } from "../controllers/gamesController.js";

const gamesRouter = Router()

gamesRouter.get("/",getMainGamesPage)

gamesRouter.get("/new",getNewGamesPage)

gamesRouter.post("/new",postNewGame)

gamesRouter.get("/:game",getSpecificGame)

gamesRouter.delete("/:game",deleteGame)

export default gamesRouter