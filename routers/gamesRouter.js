import { Router } from "express";
import { deleteGame, getEditGamePage, getMainGamesPage, getNewGamesPage, getSpecificGame, postNewGame, updateGame } from "../controllers/gamesController.js";

const gamesRouter = Router()

gamesRouter.get("/",getMainGamesPage)

gamesRouter.get("/new",getNewGamesPage)

gamesRouter.post("/new",postNewGame)

gamesRouter.get("/:game",getSpecificGame)

gamesRouter.delete("/:game",deleteGame)

gamesRouter.get("/:game/edit",getEditGamePage)

gamesRouter.patch("/:game/edit",updateGame)

export default gamesRouter