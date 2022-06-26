//Import Libraries
const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

// Starting Project
const app = express();

//change ejs view directory path
app.set("view", path.resolve(__dirname, "./src/views"));

app.use(expressLayouts); // using express-ejs-layouts as a middleware
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.send({
    mesaj: "project initialize",
  });
});

app.listen(3000, (_) => console.log("3000 port is listening..."));
