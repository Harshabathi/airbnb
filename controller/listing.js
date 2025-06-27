const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
  const alllistings = await Listing.find({});
  res.render("./listings/index.ejs", { alllistings });
}

module.exports.newlisting = (req, res) => {
  res.render("./listings/new.ejs");
}

module.exports.postlisting = async (req, res, next) => {
  try {
    const newListing = new Listing(req.body.listing);

    const geoData = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
      .send();

    newListing.geometry = geoData.body.features[0].geometry;
    newListing.owner = req.user._id;

    let savedlisting = await newListing.save();
    console.log(savedlisting);
    req.flash("success", "new lisiing created");
    res.redirect(`/listings/${newListing._id}`);
  } catch (err) {
    next(err);
  }
};


module.exports.showlisting = async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
  if (!list) {
    req.flash("error", "Searched listing does not exist");
    return res.redirect("/listings");
  }
  console.log("req.user is:", req.user);

  res.render("./listings/show.ejs", { list });
  
}

module.exports.geteditform = async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  if (!list) {
    req.flash("error", "Listing your trying to edit does not exist");
    return res.redirect("/listings");
  }
  res.render("./listings/edit.ejs", { list });
}

module.exports.editlisting = async (req, res) => {
  await Listing.findByIdAndUpdate(id, req.body.listing, {
    runValidators: true,
    new: true
  });
  req.flash("success", "Updated successfully");
  res.redirect(`/listings/${id}`);
}

module.exports.deletelisting = async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  if (res.locals.currUser._id.toString() !== list.owner._id.toString()) {
    req.flash("error", "you have no access to delete");
    return res.redirect(`/listings/${id}`);
  } else {
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Deleted successfully");
    res.redirect("/listings");
  }
}