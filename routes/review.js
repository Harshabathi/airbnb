const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const reviewcontroller = require("../controller/review.js");
const checklogin =  require("../middleware.js");
const checkauthor = require("../middleware.js");
const expressError = require("../utils/expressError.js");

//add reviews
router.post("/", checklogin,checklogin.validateReviews,wrapAsync(reviewcontroller.addreview));


//delete reviews
router.delete("/:reviewId",checklogin.checkauthor,wrapAsync(reviewcontroller.deletereview ));

module.exports = router;