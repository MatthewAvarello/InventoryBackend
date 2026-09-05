import express from "express";
import 'dotenv/config'
import { getAllCategoryNames } from "./database/queries.js";
const App = express()


const PORT = 3000;

App.listen(PORT, (error) => {

  if (error) {
    throw error;
  }

  console.log(`My first Express app - listening on port ${PORT}!`);
});