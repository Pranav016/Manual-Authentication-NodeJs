const express = require("express");
const router = express.Router();

// controller
const usersController = require("../controllers/users_controller");

// users routes
router.get("/profile", usersController.profile);
router.get("/posts", usersController.posts);
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);
router.post("/create", usersController.create);
router.post("/create-session", usersController.createSession);

module.exports = router;
