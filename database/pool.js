import { Pool } from "pg";

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
let pool = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "user",
  database: "top_users",
  password: "password",
  port: 5432 // The default port
});

export default pool

//Above: Dont do it like im doing it right now, quick example from odin project as a boilerplate template