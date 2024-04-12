const dealerRouter = require("express").Router();
const dealerController = require("../controllers/dealer.controller");

dealerRouter
  .route("/")
  .post(dealerController.createDealer)
  .get(dealerController.getAllDealer);

dealerRouter
  .route("/:dealerId")
  .get(dealerController.getDealer)
  .put(dealerController.updateDealer)
  .delete(dealerController.deleteDealer);

module.exports = dealerRouter;
