import { getAllGameData, getGameData, postGame } from "../database/queries.js"

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
export async function getSpecificGame(req,res) {
    let providedId = req.params.game
    let gamedata = await getGameData(providedId)
    if (gamedata.length == 0){
        res.status(404).send("404: No data found")
    }
    res.render("specificgame",{gamedata: gamedata})
}