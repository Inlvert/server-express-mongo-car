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
    type: Number,
    default: 0
  },
  color: {
    type: String
  },
  isInsurance: {
    type: Boolean,
    required: true
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {
  timestamps: true
});

const Car = model('Car', carSchema);

module.exports = Car;