const carRouter = require("express").Router();
const carController = require("../controllers/car.controller");

carRouter
  .route("/")
  .post(carController.createCar)
  .get(carController.findAllCars);

carRouter
  .route("/:carId")
  .get(carController.getCar)
  .put(carController.updateCar)
  .delete(carController.deleteCar);

module.exports = carRouter;
