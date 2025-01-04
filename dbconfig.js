import pg from "pg";
import dotenv from "dotenv";
dotenv.config();  

const { Pool } = pg
 
const db = new Pool({
  host: process.env.DBConnLink_int,
  user: process.env.DBuser,
  password: process.env.DBpass,
  port: process.env.DBport,
  database: "nas_test",
  max: 20,
  idle_timeout: 5,
  ssl: true
});

export default db;
