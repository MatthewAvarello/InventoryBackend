import pool from "./pool.js";

async function getAllCategoryNames() {
    let data = await pool.query("SELECT name FROM categories;")
    return data.rows
}
export{getAllCategoryNames}