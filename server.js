const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const path = require('path')

// Define middleware here
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    // Add routes, both API and view
    app.use(routes);
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    // Add routes, both API and view
    app.use(routes);
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
}

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crm", { useNewUrlParser: true });

// Passport config
app.use(passport.initialize());
require("./config/passport")(passport);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});