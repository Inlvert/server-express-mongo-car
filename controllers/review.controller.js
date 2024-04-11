const { Review, Car } = require("../models");

module.exports.createReview = async (req, res, next) => {
  try {
    const { car, body } = req;

    const review = await Review.create({
      ...body,
      carId: car._id,
    });
    await car.updateOne({ $push: { reviews: review._id } });

    console.log(car._id);

    res.send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.getReviews = async (req, res, next) => {
  try {
    const review = await Review.find().select("bodyText rating");

    res.send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.getReview = async (req, res, next) => {
  try {
    const {
      params: { reviewId },
      car: { _id: carId },
    } = req;

    const review = await Review.findOne({
      _id: reviewId,
      carId,
    });

    console.log(reviewId);
    res.send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.updateReview = async (req, res, next) => {
  try {
    const {
      params: { reviewId },
      car: { _id: carId },
      body,
    } = req;

    const updateReview = await Review.findByIdAndUpdate(
      {
        _id: reviewId,
        carId,
      },
      body,
      { new: true }
    );

    res.send({ data: updateReview });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteReview = async (req, res, next) => {
  try {
    const {
      params: { reviewId },
      car: { _id: carId },
      car,
    } = req;

    const review = await Review.findOneAndDelete({ _id: reviewId, carId });

    await car.updateOne({ $pull: { reviews: reviewId } });

    res.send({ data: review });
  } catch (error) {
    next(error);
  }
};
