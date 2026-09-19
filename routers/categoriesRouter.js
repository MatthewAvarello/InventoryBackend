import { Router } from "express";
import { deleteCategory, getMainCategoriesPage, getNewCategoryPage, getSpecificCategory, postNewCategory } from "../controllers/categoriesController.js";

const categoriesRouter = Router()

categoriesRouter.get("/",getMainCategoriesPage)

categoriesRouter.get("/new",getNewCategoryPage)

categoriesRouter.get("/:category",getSpecificCategory)

categoriesRouter.post("/new",postNewCategory)

categoriesRouter.delete("/:category",deleteCategory)
export default categoriesRouter