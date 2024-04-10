const createHttpError = require("http-errors");
const { Car } = require("../models");

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const car = await Car.create(body);

    res.status(201).send({data: car})
  } catch (error) {
    next(error);
  }
};

module.exports.findAllCars = async (req, res, next) => {
  try {
    const cars = await Car.find()
    res.send({data: cars});
    
  } catch (error) {
    next(error)
  }
}

module.exports.getCar = async (req, res, next) => {
  try {
    const {params: {carId}} = req;

    const car = await Car.findOne({
      _id: carId
    })

    if(!car) {
      return(next(createHttpError(404, 'car not found')))
    }

    res.send({data: car});

  } catch (error) {
    next(error);
  }
}

module.exports.updateCar = async (req, res, next) => {
  try {
    const {params: {carId}, body} = req;

    const car = await Car.findOneAndUpdate({
      _id: carId
    }, body, {new: true});

    res.send({data: car});

  } catch (error) {
    next(error);
  }
}

module.exports.deleteCar = async (req, res, next) => {
  try {
    const {params: {carId}} = req;

    const car = await Car.findOneAndDelete({_id: carId});

    console.log(car);

    res.send({data: car});

  } catch (error) {
    next(error);
  }
}