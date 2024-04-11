const {Schema, model} = require('mongoose');

const dealerSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  carId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Car'
  }
}, {
  timestamps: true
})

const Dealer = model('Dealer', dealerSchema);

module.exports = Dealer;