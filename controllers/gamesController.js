import { getAllGameData, postGame } from "../database/queries.js"

export async function getMainGamesPage(req,res) {
    let gamesData = await getAllGameData()
    console.log(gamesData)
    res.render("allgames",{gamesArray: gamesData})
}
export function getNewGamesPage(req,res){
    res.render("newgame")
}
export async function postNewGame(req,res) {
    await postGame(req.body)
    res.redirect("../")
}