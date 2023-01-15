const db = require("../db/dbConfig.js");

//QUERIES
/*INDEX*/
const getAllParticipants = async () => {
  try {
    const allParticipants = await db.any("SELECT * FROM participants");
    return allParticipants;
  } catch (err) {
    return err;
  }
};

/*SHOW*/
const getParticipant = async (id) => {
  try {
    const oneParticipant = await db.one("SELECT * FROM participants WHERE id=$1", id);
    return oneParticipant;
  } catch (err) {
    return err;
  }
};

/*CREATE*/
const newParticipant = async (participant) => {
  try {
    //throw more error handling and validation
    const createParticipant = await db.one("INSERT INTO participants (firstname, lastname, email, phone, raffle_id) VALUES($1, $2, $3,$4,$5) RETURNING *", [participant.firstname, participant.lastname, participant.email, participant.phone, participant.raffle_id]);
    return createParticipant;
  } catch (err) {
    return err;
  }
};

/*DELETE*/
const deleteParticipant = async (id) => {
  try {
    const deletedParticipant = await db.one("DELETE FROM participants WHERE id=$1 RETURNING *;", id);
    return deletedParticipant;
  } catch (err) {
    return err;
  }
};

/*UPDATE*/
const updateParticipant = async (id, participant) => {
  try {
    const updatedParticipant = await db.one("UPDATE participants SET firstname=$1, lastname=$2, email=$3, phone=$4, raffle_id=$5 WHERE id=$6 RETURNING *", [participant.firstname, participant.lastname, participant.email, participant.phone, participant.raffle_id, id]);
    return updatedParticipant;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllParticipants,
  getParticipant,
  newParticipant,
  updateParticipant,
  deleteParticipant,
};
