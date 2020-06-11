require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const toDoListRoute = require(`${__dirname}/api/routes/toDoListRoutes`)
const controls = require(`${__dirname}/api/routes/controls`)

// App settings
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());

// MondoDB connection
mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true,
    useUnifiedTopology: true,});
    mongoose.set("useCreateIndex", true);

// Use routes
app.use("/", toDoListRoute);
app.use("/controls", controls);

// Server init
app.listen(process.env.PORT || process.env.LOCAL, function() {
    console.log("Server has started successfully");
  });