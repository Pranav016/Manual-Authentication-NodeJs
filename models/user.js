const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //helps to store 'createdAt' and 'updatedAt' info of a user
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
