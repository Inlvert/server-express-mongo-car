const { Car } = require("../models");

module.exports.findCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const foundCar = await Car.findById(carId);

    req.car = foundCar;

    next();
  } catch (error) {
    next(error);
  }
};
