const User = require("../models/user.js");

module.exports.renderregisterform = (req,res)=>{
    res.render("../views/users/register.ejs");
}

module.exports.postnewuser = async (req,res,next)=>{
   try{
    let {email,username,password} = req.body;
    let newUser = new User({email,username});
    const reguser = await User.register(newUser,password);
    req.login(reguser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Registration Successful");
        res.redirect("/listings");

         })
    }
    catch(err){
        req.flash("error",err.message);
        res.redirect("/users/register");
    }
}

module.exports.renderloginform = (req,res)=>{
    res.render("../views/users/login.ejs");
}

module.exports.postlogin = (req, res) => {                
    const redirectUrl = res.locals.redirectUrl || "/listings";
    req.flash("success", "Welcome back!");                    
    res.redirect(redirectUrl);
  }

module.exports.logout = (req,res,next)=> {
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logged-out successfully");
        res.redirect("/users/login");
    })
}