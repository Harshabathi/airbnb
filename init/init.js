const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
let initdata = require("./data.js");

const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

// Connect to DB
async function main() {
  try {
    await mongoose.connect(Mongo_url);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

const initialiseDB = async () => {
  try {
    await Listing.deleteMany({});
    await User.deleteMany({ username: "seedowner" }); // Clean old seed user

    // Step 1: Create a user with known ID
    const seedUserId = new mongoose.Types.ObjectId("684aaa4142943137623500ec");

    const newUser = new User({
      _id: seedUserId,
      username: "seedowner",
      email: "seedowner@example.com",
    });

    await User.register(newUser, "1234"); // Assumes passport-local-mongoose

    // Step 2: Add listings with this user as owner
    const updatedData = initdata.map((obj) => ({
      ...obj,
      owner: seedUserId,
    }));

    await Listing.insertMany(updatedData);
    console.log("✅ Database seeded with listings and owner");
  } catch (err) {
    console.error("❌ Error during seeding:", err);
  } finally {
    mongoose.connection.close();
  }
};

main().then(initialiseDB);
