const {Schema, model} = require('mongoose');

const reviewSchema = new Schema ({
  bodyText: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  autor: {
    type: String,
    required: true,
  },
  isRecomendate: {
    type: Boolean,
    default: false
  },
  carId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Car'
  }
}, {
  timestamps: true
})

const Review = model('Review', reviewSchema);

module.exports = Review;
