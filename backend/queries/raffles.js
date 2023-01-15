const db = require("../db/dbConfig.js");

//QUERIES
/*INDEX*/
const getAllRaffles = async () => {
  try {
    const allRaffles = await db.any("SELECT * FROM raffles");
    return allRaffles;
  } catch (err) {
    return err;
  }
};

/*SHOW*/
const getRaffle = async (id) => {
  try {
    const oneRaffle = await db.one("SELECT * FROM raffles WHERE id=$1", id);
    return oneRaffle;
  } catch (err) {
    return err;
  }
};

/*CREATE*/
const newRaffle = async (raffle) => {
  try {
    //throw more error handling and validation
    const createRaffle = await db.one("INSERT INTO raffles (rafflename, dates, is_winner, secretcode) VALUES($1, $2, $3,$4) RETURNING *", [raffle.rafflename, raffle.dates, raffle.is_winner, raffle.secretcode]);
    return createRaffle;
  } catch (err) {
    return err;
  }
};

/*UPDATE*/
const updateRaffle = async (id, raffle) => {
  try {
    const updatedRaffle = await db.one("UPDATE raffles SET rafflename=$1, dates=$2, is_winner=$3, secretcode=$4 WHERE id=$5 RETURNING *", [raffle.rafflename, raffle.dates, raffle.is_winner, raffle.secretcode, id]);
    return updatedRaffle;
  } catch (err) {
    return err;
  }
};

/*DELETE*/
const deleteRaffle = async (id) => {
  try {
    const deleted = await db.one("DELETE FROM raffles WHERE id=$1 RETURNING *", id);
    return deleted;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllRaffles,
  getRaffle,
  newRaffle,
  updateRaffle,
  deleteRaffle,
};
