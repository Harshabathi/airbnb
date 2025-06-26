
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.addreview = async (req, res) => {
  let list = await Listing.findById(req.params.id);
  let newreview = new Review(req.body.review);
  newreview.author = req.user._id;
  list.reviews.push(newreview);
  await newreview.save();
  await list.save();

  await list.populate("reviews");
  req.flash("success","new review created");
  res.redirect(`/listings/${list._id}`);
}

module.exports.deletereview = async (req, res) => {
    const { id, reviewId } = req.params;
    const list = await Listing.findById(id);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    if(!list){
    req.flash("success","review deleted successfully");
    res.redirect("/listings");
      }else{
    res.redirect(`/listings/${id}`);}
}