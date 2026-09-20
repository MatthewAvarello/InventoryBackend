import { Router } from "express";
import { deleteCategory, getEditCategoryPage, getMainCategoriesPage, getNewCategoryPage, getSpecificCategory, postNewCategory, updateCategory } from "../controllers/categoriesController.js";

const categoriesRouter = Router()

categoriesRouter.get("/",getMainCategoriesPage)

categoriesRouter.get("/new",getNewCategoryPage)

categoriesRouter.get("/:category",getSpecificCategory)

categoriesRouter.post("/new",postNewCategory)

categoriesRouter.delete("/:category",deleteCategory)

categoriesRouter.get("/:category/edit", getEditCategoryPage)

categoriesRouter.patch("/:category/edit",updateCategory)
export default categoriesRouter