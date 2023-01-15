//DEPENDENCIES
const express = require("express");
const participants = express.Router({ mergeParams: true });
const { getAllParticipants, getParticipant, newParticipant, updateParticipant, deleteParticipant } = require("../queries/participants");

//ROUTES
/*INDEX*/
participants.get("/", async (req, res) => {
  try {
    const allParticipants = await getAllParticipants();
    res.json(allParticipants);
  } catch (err) {
    res.status(404).json(err);
  }
});

/*SHOW*/
participants.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const participant = await getParticipant(id);
    if (participant.id) {
      res.json(participant);
    } else {
      console.log(`Database rror: ${participant}`);
      throw `No existing participant ${id}!`;
    }
  } catch (err) {
    res.status(404).json({ error: "Resource not found.", message: err });
  }
});

/*CREATE*/
participants.post("/", async (req, res) => {
  try {
    const participant = await newParticipant(req.body);
    if (participant.id) {
      res.json(participant);
    } else {
      console.log(`Database error: ${participant}`);
      throw `Error dding ${req.body} to the database.`;
    }
  } catch (err) {
    res.status(404).json({ err: err });
  }
});

/*UPDATE*/
participants.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedParticipant = await updateParticipant(id, req.body);
    if (updatedParticipant.id) {
      res.status(200).json(updatedParticipant);
    } else {
      throw `unable to update`;
    }
  } catch (err) {
    res.status(404).json({ err: err });
  }
});

/*DELETE*/
participants.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedParticipant = await deleteParticipant(id);
    if (deletedParticipant.id) {
      res.json(deletedParticipant);
    } else {
      throw "Resource not found.";
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = participants;
