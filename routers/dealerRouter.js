const dealerRouter = require("express").Router();
const dealerController = require("../controllers/dealer.controller");

dealerRouter
  .route("/")
  .post(dealerController.createDealer)
  .get(dealerController.getAllDealer);

module.exports = dealerRouter;
