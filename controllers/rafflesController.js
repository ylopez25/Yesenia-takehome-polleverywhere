const express = require('express');
const raffles = express.Router();
const { getAllRaffles } = require('../queries/raffles.js')

raffles.get("/",  async (req,res) => {
    const allRaffles = await getAllRaffles();
    res.json(allRaffles)
});

module.exports = raffles;