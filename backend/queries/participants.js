const db = require("../db/dbConfig.js");

//QUERIES
/*INDEX*/
const getAllParticipants = async (raffleId) => {
  try {
    const allParticipants = await db.any("SELECT * FROM participants WHERE raffle_id=$1", raffleId);
    return allParticipants;
  } catch (err) {
    return err;
  }
};

/*SHOW*/
const getParticipant = async (id, raffleId) => {
  try {
    const oneParticipant = await db.one("SELECT * FROM participants WHERE id=$1 AND raffle_id=$2", [id, raffleId]);
    return oneParticipant;
  } catch (err) {
    return err;
  }
};

/*CREATE*/
const newParticipant = async (participant, raffleId) => {
  try {
    const createParticipant = await db.one(`INSERT INTO participants (firstname, lastname, email, phone, raffle_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [participant.firstname, participant.lastname, participant.email, participant.phone, raffleId]);
    return createParticipant;
  } catch (err) {
    return err;
  }
};

/*UPDATE*/
const updateParticipant = async (raffleId, id, participant) => {
  try {
    const updatedParticipant = await db.one(`UPDATE participants SET firstname=$1, lastname=$2, email=$3, phone=$4 WHERE id=$5 AND raffle_id=$6 RETURNING *`, [participant.firstname, participant.lastname, participant.email, participant.phone, id, raffleId]);
    //console.log()
    return updatedParticipant;
  } catch (err) {
    return err;
  }
};

/*DELETE*/
const deleteParticipant = async (raffleId, id) => {
  try {
    const deletedParticipant = await db.one(`DELETE FROM participants WHERE id=$1 AND raffle_id=$2 RETURNING *`, [id, raffleId]);
    return deletedParticipant;
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
