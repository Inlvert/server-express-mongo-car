const { Review } = require("../models");

module.exports.createReview = async (req, res, next) => {
  try {
    const { car, body } = req;

    const review = await Review.create({
      ...body,
      carId: car._id,
    });
    await car.updateOne({ $push: { reviews: review._id } });

    console.log(car._id)

    res.send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.getReviews = async (req, res, next) => {
  try {
    const review = await Review.find().populate('bodyText', 'rating');

    res.send({data: review});
  } catch (error) {
    next(error);
  }
}