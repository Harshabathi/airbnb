if(process.env.NODE_ENV !="production"){
  require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require('connect-mongo');
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const checklogin = require("./middleware.js"); 



// Models
const User = require("./models/user.js");
const expressError = require("./utils/expressError.js");

// Routers
const listingrouter = require("./routes/listing.js");
const reviewrouter = require("./routes/review.js");
const userrouter = require("./routes/user.js");

// Constants
//const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
    secret: process.env.SECRET || "myBackupSecretKey"
  },
    touchAfter : 24*3600
  })

  store.on("error",(err)=>{
    console.log("Error in mongo session",err);
  })

const sessionOptions = {
  store,
  secret: "mysyuperSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  }
};



// Database Configuration
async function main() {
  try {
    
    await mongoose.connect(dbUrl);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.log("❌ MongoDB connection failed:", err);
  }
}
main();


// Middleware Setup
app.use(express.static(path.join(__dirname, "public")));  
app.use(methodOverride("_method"));                      
app.use(express.urlencoded({ extended: true }));         
app.use(express.json());           
app.use(session(sessionOptions));                        
app.use(flash());    
app.use(checklogin.saveredirectUrl); 
                                

// Passport Configuration
app.use(passport.initialize());                           
app.use(passport.session());                             
passport.use(new localStrategy(User.authenticate()));     
passport.serializeUser(User.serializeUser());             
passport.deserializeUser(User.deserializeUser());         

// Flash Messages Middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});


// View Engine Setup

app.engine("ejs", ejsMate);                             
app.set("view engine", "ejs");                            
app.set("views", path.join(__dirname, "views"));           


// Route Handlers
// Route Mounting
app.use("/listings", listingrouter);                      
app.use("/listings/:id/reviews", reviewrouter);
app.use("/users",userrouter);           

// Error Handling

app.all("/*any", (req, res, next) => {
  next(new expressError(404, "Page not found"));
});

// Global Error Handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("./listings/error.ejs", { status, message });
});

app.get("/",(req,res)=>{
  res.render("listing.ejs");
})

// Server Startup
app.listen(8080, () => {
  console.log("🌐 App is listening on http://localhost:8080");
});
