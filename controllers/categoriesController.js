import { getAllCategoryNames, postCategory } from "../database/queries.js"

export async function getMainCategoriesPage(req,res){
    let categoryNames = await getAllCategoryNames()
    res.render("allcategories",{categoriesArray: categoryNames})
}
export function getNewCategoryPage(req,res){
    res.render("newcategory")
}
export async function postNewCategory(req,res){
    await postCategory(req.body)
    res.redirect("../")
}