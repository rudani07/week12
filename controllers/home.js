const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
  const blogPosts = await BlogPost.find({}).populate("userid");
  console.log(req.session);
  console.log({ blogPosts });
  res.render("index", { blogPosts });
};
