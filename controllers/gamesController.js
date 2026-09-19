import { getAllGameData } from "../database/queries.js"

export async function getMainGamesPage(req,res) {
    let gamesData = getAllGameData()
    res.render("allgames",{gamesArray: gamesData})
}
export function getNewGamesPage(req,res){
    res.render("newgame")
}
export async function postNewGame(req,res) {
    postNewGame(req.body)
    res.redirect("../")
}