const createHttpError = require("http-errors");
const { Car, Review, Dealer } = require("../models");

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const car = await Car.create(body);

    res.status(201).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllCars = async (req, res, next) => {
  try {
    const cars = await Car.find().populate({
      path: "reviews dealers",
      select: 'bodyText rating autor isRecomendate name address' // view only those fields from {reviews and dealers}
    });
    res.send({ data: cars });
  } catch (error) {
    next(error);
  }
};

module.exports.getCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findOne({
      _id: carId,
    });

    if (!car) {
      return next(createHttpError(404, "car not found"));
    }

    res.send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;

    const car = await Car.findOneAndUpdate(
      {
        _id: carId,
      },
      body,
      { new: true }
    );

    res.send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const deleteCar = await Car.findOneAndDelete({ _id: carId });

    await Review.deleteMany({
      _id: {
        $in: deleteCar.reviews,
      },
    });

    await Dealer.deleteMany({
      _id: {
        $in: deleteCar.dealers,
      },
    });

    console.log(deleteCar);

    res.send({ data: deleteCar });
  } catch (error) {
    next(error);
  }
};
