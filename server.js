//////////////////////
// Dependencies
/////////////////////
require("dotenv").config();

const express = require("express");
const mongoose = require("./models/connection");
const Tire = require("./models/Tire");
const TireRouter = require("./controllers/TiresController");
const methodOverride = require("method-override");
const morgan = require("morgan");

//Creat Express Application
const app = express();
const PORT = process.env.PORT;

//////////////////////
//Middleware
//////////////////////
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("static"));
app.use(TireRouter);
app.use(methodOverride);
app.use(morgan("dev"));

////////////////////
//Server LISTENER
/////////////////////
app.listen(PORT, ()=>console.log("Rolling on port", PORT))