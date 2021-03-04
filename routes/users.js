const express = require("express");
const router = express.Router();

// controller
const usersController = require("../controllers/users_controller");

// users routes
router.get("/profile", usersController.profile);
router.get("/posts", usersController.posts);

module.exports = router;
