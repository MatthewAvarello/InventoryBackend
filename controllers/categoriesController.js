import { getAllCategoryData, getAllCategoryNames, getCategoryData, postCategory } from "../database/queries.js"

export async function getMainCategoriesPage(req,res){
    let categoryData = await getAllCategoryData()
    res.render("allcategories",{categoriesArray: categoryData})
}
export async function getNewCategoryPage(req,res){
    res.render("newcategory")
    let test = await getAllCategoryData()
}
export async function getSpecificCategory(req,res) {
    let providedId = req.params.category
    let categorydata = await getCategoryData(providedId)
    console.log(categorydata)
    if (categorydata.length == 0){
        res.status(404).send("404: No data found")
    }
    console.log(categorydata)
    res.render("specificcategory",{categorydata: categorydata})
}
export async function postNewCategory(req,res){
    await postCategory(req.body)
    res.redirect("../")
}