//pass --> xMSIHsfsYgrzlj0I

const express = require("express");
const mongoose = require("mongoose");

// Create Express app
const app = express();  // <-- this line was missing

// Middleware
app.use("/", (req, res) => {
  res.send("It is working....");
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:xMSIHsfsYgrzlj0I@cluster0.d2agjkw.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000")); // use app, not application
  })
  .catch((err) => console.log(err));
