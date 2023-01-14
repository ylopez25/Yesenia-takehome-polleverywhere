const db = require("../db/dbConfig.js");

const getAllRaffles = async () => {
  try {
    const allRaffles = await db.any("SELECT * FROM raffles");
    return allRaffles;
  } catch (err) {
    return err;
  }
};

//SHOW ONE
const getRaffle = async (id) => {
  try {
    const oneRaffle = await db.one("SELECT * FROM raffles WHERE id=$1", id);
    return oneRaffle;
  } catch (err) {
    return err;
  }
};

//CREATE
const newRaffle = async (raffle) => {
    try {
        //throw more error handling and validation
        const createRaffle = await db.one(
            'INSERT INTO raffles (rafflename, date, is_winner, secretcode) VALUES($1, $2, $3,$4) RETURNING *',
            [raffle.rafflename, raffle.date, raffle.is_winner, raffle.secretcode]
        )
        return createRaffle;
    }catch (err) {
        return err
    }
}

module.exports = {
  getAllRaffles,
  getRaffle,
  newRaffle,
};
