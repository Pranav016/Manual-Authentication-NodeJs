const express = require("express");
const app = express();
const port = 8000;

// routes
const homeRoute = require("./routes"); //by default requires index file

// using middlewares
app.use("/", homeRoute);

// setup view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server started on port ${port}`);
});
