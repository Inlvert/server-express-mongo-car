const carRouter = require("express").Router();
const carController = require("../controllers/car.controller");
const { findCar } = require("../middlewares/findCar.mw");
const dealerRouter = require("./dealerRouter");
const reviewRouter = require("./reviewRouter");

carRouter
  .route("/")
  .post(carController.createCar)
  .get(carController.findAllCars);

carRouter
  .route("/:carId")
  .get(carController.getCar)
  .put(carController.updateCar)
  .delete(carController.deleteCar);

carRouter.use('/:carId/reviews', findCar, reviewRouter);

carRouter.use('/:carId/dealers', findCar, dealerRouter);

module.exports = carRouter;
