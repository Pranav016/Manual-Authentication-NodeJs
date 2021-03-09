// importing models
const User = require("../models/user");

// render profile page
module.exports.profile = (req, res) => {
  const userId = req.cookies.user_id;
  if (!userId) {
    return res.redirect("sign-in");
  } else {
    User.findById(userId, (err, user) => {
      if (err) {
        console.log(`error in profile: ${err}`);
      } else if (!user) {
        return res.redirect("sign-up");
      } else {
        return res.render("user_profile", {
          title: this.profile,
          name: user.name,
          email: user.email,
        });
      }
    });
  }
};

// render posts
module.exports.posts = (req, res) => {
  return res.end("<h1>User Posts</h1>");
};

// render sign-up page
module.exports.signUp = (req, res) => {
  return res.render("user_sign_up", {
    title: "Sign Up",
  });
};

// render sign-in page
module.exports.signIn = (req, res) => {
  return res.render("user_sign_in", {
    title: "Sign In",
  });
};

// get sign-up data
module.exports.create = (req, res) => {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(`Error in sign-up controller: ${err}`);
      return;
    }
    if (!user) {
      User.create(req.body, (err, user) => {
        if (err) {
          console.log(`Error in sign-up controller: ${err}`);
          return res.redirect("back");
        } else {
          return res.redirect("/users/sign-in");
        }
      });
    } else {
      return res.redirect("back");
    }
  });
};

// sign-in and create session for the user
module.exports.createSession = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(`error during session creation: ${err}`);
    }
    if (user) {
      if (user.password === req.body.password) {
        res.cookie("user_id", user.id); //user.id and user_id both work
        return res.redirect("/users/profile");
      } else {
        return res.redirect("back");
      }
    } else {
      return res.redirect("sign-up");
    }
  });
};
