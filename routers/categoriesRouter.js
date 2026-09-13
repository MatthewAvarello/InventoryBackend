import { Router } from "express";
import { getMainCategoriesPage, getNewCategoryPage, getSpecificCategory, postNewCategory } from "../controllers/categoriesController.js";

const categoriesRouter = Router()

categoriesRouter.get("/",getMainCategoriesPage)

categoriesRouter.get("/new",getNewCategoryPage)

categoriesRouter.get("/:category",getSpecificCategory)

categoriesRouter.post("/new",postNewCategory)

export default categoriesRouter