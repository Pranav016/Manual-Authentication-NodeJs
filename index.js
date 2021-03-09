const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

// routes
const homeRoute = require("./routes"); //by default requires index file

// setting up middlewares
app.use(express.urlencoded({ extended: true }));
/*This method is inbuilt in express to recognize
the incoming Request Object as strings or arrays*/
app.use(express.static("public"));
app.use(cookieParser());

app.use("/", homeRoute);

// setup view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// starting the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server started on port ${port}`);
});
