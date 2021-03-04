module.exports.profile = (req, res) => {
  return res.end("<h1>User Profile</h1>");
};

module.exports.posts = (req, res) => {
  return res.end("<h1>User Posts</h1>");
};
