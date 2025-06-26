const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const checklogin = require("../middleware.js");
const checkowner = require("../middleware.js");
const validateListing = require("../middleware.js");
const listingController = require("../controller/listing.js");


router.route("/")
  .get(wrapAsync(listingController.index))
  .post(checklogin.validateListing, wrapAsync(listingController.postlisting));
 

router.get("/new", checklogin, listingController.newlisting);

router.route("/:id")
  .get(checklogin, wrapAsync(listingController.showlisting))
  .put(checklogin, checklogin.checkowner, validateListing, wrapAsync(listingController.editlisting))
  .delete(checklogin, checkowner, wrapAsync(listingController.deletelisting));


router.get("/:id/edit", checklogin, checklogin.checkowner, wrapAsync(listingController.geteditform));

module.exports = router;