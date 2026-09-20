import express from "express";
import 'dotenv/config'
import { deleteGame, getAllCategoryNames } from "./database/queries.js";
import indexRouter from "./routers/indexRouter.js";
import gamesRouter from "./routers/gamesRouter.js";
import categoriesRouter from "./routers/categoriesRouter.js";
import path from "node:path";
const __dirname = import.meta.dirname;
const App = express()

const assetsPath = path.join(__dirname, "assets");
App.use(express.static(assetsPath));
App.use(express.urlencoded({ extended: true }));
App.use(express.json()); 

App.set("views", path.join(__dirname, "views"));
App.set("view engine", "ejs");

App.use("/",indexRouter)
App.use("/games",gamesRouter)
App.use("/categories",categoriesRouter)
const PORT = 3000;

deleteGame(2)

App.listen(PORT, (error) => {

  if (error) {
    throw error;
  }

  console.log(`My first Express app - listening on port ${PORT}!`);
});