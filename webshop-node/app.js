const express = require("express");
const router = require("./routes/api");
const logger = require("morgan"); //morgan sam sluzi za vise informacija o zahtevu
const parser = require ("body-parser")


const app = express();
app.use(logger("dev"));

app.use(parser.urlencoded({extended: true}));//PArser parsira zahteve koji dolaze u json formatu da bi mogli da pristupimo
app.use(parser,parser.json());

app.use("/", router);

module.exports = app;
//cline get abi  strukturu kontrakta na tom akauntu;