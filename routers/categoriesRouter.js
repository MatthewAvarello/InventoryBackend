import { Router } from "express";
import { getMainCategoriesPage, getNewCategoryPage, postNewCategory } from "../controllers/categoriesController.js";

const categoriesRouter = Router()

categoriesRouter.get("/",getMainCategoriesPage)

categoriesRouter.get("/new",getNewCategoryPage)

categoriesRouter.post("/new",postNewCategory)

export default categoriesRouter