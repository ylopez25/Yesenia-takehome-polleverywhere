//DEPENDENCIES
const express = require("express");
const participants = express.Router({ mergeParams: true });
const { getAllParticipants, getParticipant, newParticipant, updateParticipant, deleteParticipant } = require("../queries/participants");

//ROUTES
/*INDEX*/
participants.get("/", async (req, res) => {
  try {
    const { raffleId } = req.params;
    const allParticipants = await getAllParticipants(raffleId);
    res.json(allParticipants);
  } catch (err) {
    res.status(404).json(err);
  }
});

/*SHOW*/
participants.get("/:id", async (req, res) => {
  try {
    const { raffleId } = req.params;
    const { id } = req.params;
    const participant = await getParticipant(id, raffleId);
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
    const { raffleId } = req.params;
    const participant = await newParticipant(req.body, raffleId);
    res.status(200).json({
      success: true,
      payload: participant,
    });
  } catch (err) {
    res.status(404).json({ err: err, message: message });
  }
});

/*UPDATE*/
participants.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { raffleId } = req.params;
    const updatedParticipant = await updateParticipant(id, req.body, raffleId);
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
  try {
    const { id } = req.params;
    const { raffleId } = req.params;
    const deletedParticipant = await deleteParticipant(id, raffleId);
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
