const mongoose = require('mongoose');
const CONSTANTS = require('../constants');
const Car = require('./car')
const Review = require('./review')
const Dealer = require('./dealer')

async function connectToDB() {
  await mongoose.connect(CONSTANTS.DB_URL);
};

connectToDB().catch(err => console.log(err));

module.exports = {
  Car,
  Review,
  Dealer
}