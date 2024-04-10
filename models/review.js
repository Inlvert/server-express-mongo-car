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
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Car'
  },
  isRecomendate: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const Review = model('Review', reviewSchema);

module.exports = Review;
