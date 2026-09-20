import pool from "./pool.js";

async function getAllCategoryNames() {
    let data = await pool.query("SELECT name FROM categories;") 
    let rows = data.rows
    let namearray = []
    rows.forEach(element => {
        let name = element.name
        console.log(name)
        namearray.push(name)
    });
    return namearray
}
async function getAllCategoryData() {
    let data = await pool.query("SELECT * FROM categories;") 
    let rows = data.rows
    return rows
}
async function getCategoryData(id){
    let data = await pool.query(`SELECT * FROM categories WHERE category_id = ${id}`)
    return data.rows
}
async function postCategory(data) {
    let query = `INSERT INTO categories (name, description) VALUES ('${data.categoryname}', '${data.categorydescription}');`
    console.log(query)
    let newRow = await pool.query(query)
    return
}
async function postGame(data) {
    let query = `INSERT INTO games (name, category_id, hours_played, image_link, played, user_rating, description) VALUES ('${data.name}', '${data.category_id}', '${data.hours_played}', '${data.image_link}', '${data.played}', '${data.user_rating}', '${data.description}');`
    console.log(query)
    let newRow = await pool.query(query)
    return
}
async function getAllGameData() {
    let data = await pool.query("SELECT * FROM games;") 
    let rows = data.rows
    return rows
}
async function getGameByCategoryId(id) {
    let query = `SELECT * FROM games WHERE category_id = ${id};`
    let data = await pool.query(query)
    return data.rows
}
async function getGameData(id) {
    let data = await pool.query(`SELECT * FROM games WHERE game_id = ${id}`)
    return data.rows
}
async function deleteGame(id) {
    let data = await pool.query(`DELETE FROM games WHERE game_id = ${id}`)
}
async function deleteCategory(id) {
    let data = await pool.query(`DELETE FROM categories WHERE category_id = ${id}`)
    return
}
async function updateGameValue(id,value,column){
    console.log(value)
    console.log(column)
    let query = `UPDATE games SET ${column} = '${value}' WHERE game_id = ${id};`
    let data = await pool.query(query)
}
async function updateCategoryValue(id,value,column){
    console.log(value)
    console.log(column)
    let query = `UPDATE categories SET ${column} = '${value}' WHERE category_id = ${id};`
    let data = await pool.query(query)
}
export{getAllCategoryNames,postCategory,getAllCategoryData,getCategoryData,postGame,getAllGameData,getGameByCategoryId,getGameData,deleteGame,deleteCategory,updateGameValue,updateCategoryValue}