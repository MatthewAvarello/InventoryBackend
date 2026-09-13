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

export{getAllCategoryNames,postCategory,getAllCategoryData,getCategoryData}