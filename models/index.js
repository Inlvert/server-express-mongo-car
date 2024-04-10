const mongoose = require('mongoose');
const CONSTANTS = require('../constants');
const Car = require('./car')


async function connectToDB() {
  await mongoose.connect(CONSTANTS.DB_URL);
};

connectToDB().catch(err => console.log(err));

module.exports = {
  Car
}