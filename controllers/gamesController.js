import { getAllGameData, getGameData, postGame, updateGameValue } from "../database/queries.js"
import { deleteGame as deleteGameQuery} from "../database/queries.js"
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
export async function deleteGame(req,res) {
    console.log("Sent a delete request yo!")
    let providedId = req.params.game
    deleteGameQuery(providedId)
    res.status(200).json({ success: true });
}
export async function updateGame(req,res) {
    let body = req.body
    let providedId = req.params.game
    console.log(providedId)
    for (const key in body) {
        let value = body[key]
        let update = await updateGameValue(providedId,value,key)
    }
    res.status(200).json({ success: true });
}
export async function getEditGamePage(req,res) {
    res.render("editgame")
}