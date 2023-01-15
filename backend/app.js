//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const rafflesController = require("./controllers/rafflesController.js");
const participantsController = require("./controllers/participantsController.js");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Raffle");
});
app.use("/raffles", rafflesController);
app.use("/participants", participantsController);

//404
app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

//EXPORT
module.exports = app;
