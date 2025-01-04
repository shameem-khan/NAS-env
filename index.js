import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
//import dotenv from "dotenv";

import db from "./dbconfig.js";

//dotenv.config();    


const app = express();
const port = 3000;
const userdata = [];  

db.database= "nas_test";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    userdata[0] = req.body.client;
    userdata[1] = req.body.lpo_date;
    userdata[2] = req.body.lpo_ref;

    db.query("INSERT INTO lpo_list (client, lpo_date, lpo_ref) VALUES ($1, $2, $3)", [userdata[0], userdata[1], userdata[2],]);
    res.redirect("/");
});

app.post("/add", (req, res) => {
    userdata[0] = req.body.client;
    userdata[1] = req.body.lpo_date;
    userdata[2] = req.body.lpo_ref;

    db.query("INSERT INTO lpo_list (client, lpo_date, lpo_ref) VALUES ($1, $2, $3)", [userdata[0], userdata[1], userdata[2],]);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on render on http://localhost:${port}`);
});
















