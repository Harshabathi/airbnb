
const express = require("express");
const router = express.Router({mergeParams:true});
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");
const userController = require("../controller/user.js");


router.route("/register")
    .get(userController.renderregisterform)
    .post(wrapAsync(userController.postnewuser));

router.route("/login")
    .get(userController.renderloginform)
    .post(passport.authenticate("local", { failureRedirect: "/users/login", failureFlash: true }), userController.postlogin);


router.get("/logout", userController.logout);

module.exports = router;