module.exports.profile = (req, res) => {
  return res.end("<h1>User Profile</h1>");
};

module.exports.posts = (req, res) => {
  return res.end("<h1>User Posts</h1>");
};

module.exports.signUp = (req, res) => {
  return res.render("user_sign_up", {
    title: "Sign Up",
  });
};

module.exports.signIn = (req, res) => {
  return res.render("user_sign_in", {
    title: "Sign In",
  });
};
