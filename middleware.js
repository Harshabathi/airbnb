const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const expressError = require("./utils/expressError.js");

const { listingJoi,reviewJoi} = require("./schema.js");

const checklogin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You need to login first");
    return res.redirect("/users/login");
  }
  next();
};

module.exports = checklogin;

module.exports.saveredirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.checkowner = async (req, res, next) => {
  const { id } = req.params;
  const list = await Listing.findById(id);

  if (!list) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  if (!req.user || list.owner.toString() !== req.user._id.toString()) {
    req.flash("error", "You do not have permission to perform this action");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingJoi.validate(req.body);
  if (error) {
    let msg = error.details.map((el) => el.message).join(",");
    next(new expressError(400, msg));
  }
  else {
    next();
  }
}

module.exports.
validateReviews = (req,res,next)=>{
  let {error} = reviewJoi.validate(req.body);
  if(error){
  let msg = error.details.map((el)=> el.message).join(",");
  next (new expressError(400,msg));}
  else{
    next();
  }
}

module.exports.checkauthor = async (req, res, next) => {
  const { id, reviewId} = req.params;

  const list = await Listing.findById(id);
  const review = await Review.findById(reviewId);

  if (!list) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  if (!review) {
    req.flash("error", "Review not found");
    return res.redirect(`/listings/${id}`);
  }
  if (!req.user || review.author.toString() !== req.user._id.toString()) {
    req.flash("error", "You do not have permission to perform this action");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

