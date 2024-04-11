const reviewRouter = require("express").Router();
const reviewController = require("../controllers/review.controller");

reviewRouter
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getReviews);
reviewRouter
  .route("/:reviewId")
  .get(reviewController.getReview)
  .put(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = reviewRouter;
