//DEPENDENCES
const express = require("express");
const raffles = express.Router({ mergeParams: true});
const { getAllRaffles, getRaffle, newRaffle, updateRaffle, deleteRaffle} = require("../queries/raffles.js");

//ROUTES
/*INDEX*/
raffles.get("/", async (req, res) => {
  const allRaffles = await getAllRaffles();
  res.json(allRaffles);
});

/*SHOW*/
raffles.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const raffle = await getRaffle(id);
    if (raffle.id) {
      res.json(raffle);
    } else {
      console.log(`Database rror: ${raffle}`);
      throw `No existing raffle ${id}!`;
    }
  } catch (err) {
    res.status(404).json({ error: "Resource not found.", message: err });
  }
});

/*CREATE*/
raffles.post("/", async (req, res) => {
  try {
    const raffle = await newRaffle(req.body);
    if (raffle.id) {
      res.json(raffle);
    } else {
      console.log(`Database error: ${raffle}`);
      throw `Error dding ${req.body} to the database.`;
    }
  } catch (err) {
    res.status(404).json({ err: err });
  }
});

/*UPDATE*/
raffles.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRaffle = await updateRaffle(id, req.body);
    if (updatedRaffle.id) {
      res.status(200).json(updatedRaffle);
    } else {
      throw `unable to update`;
    }
  } catch (err) {
    res.status(404).json({ err: err });
  }
});

//DELETE
raffles.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteRaffle(id);
    if (deleted.id) {
      res.json(deleted);
    } else {
      throw "Resource not found.";
    }
  } catch (err) {
    res.status(404).json({ err: err, message: err.message });
  }
});

module.exports = raffles;
