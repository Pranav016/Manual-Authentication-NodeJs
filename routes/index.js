const express = require("express");
const router = express.Router();

// acquiring routers and controllers
const homeController = require("../controllers/home_controller");
const userRoute = require("./users");

// middleware
router.get("/", homeController.home);
router.use("/users", userRoute);

module.exports = router;
