const {Schema, model} = require('mongoose');

const carSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  yearOfProduction: {
    type: Date
  },
  km: {
    type: Number
  },
  color: {
    type: String
  },
  isInsurance: {
    type: Boolean
  }
}, {
  timestamps: true
});

const Car = model('Car', carSchema);

module.exports = Car;