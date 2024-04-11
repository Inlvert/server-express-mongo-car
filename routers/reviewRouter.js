const reviewRouter = require("express").Router();
const reviewController = require("../controllers/review.controller");

reviewRouter
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getReviews);

module.exports = reviewRouter;
