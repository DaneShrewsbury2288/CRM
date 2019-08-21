const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const bcrypt = require("bcrypt");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crm"), { useNewUrlParser: true };

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


function permissionConverter(num) {
    return num.toString(2)
}

var userPermission = permissionConverter(52)

if (parseInt(userPermission.charAt(0))) {
    console.log("Permission 1 Granted")
}
else {
    console.log("Permission 1 Denied")
}
if (parseInt(userPermission.charAt(1))) {
    console.log("Permission 2 Granted")
}
else {
    console.log("Permission 2 Denied")
}
if (parseInt(userPermission.charAt(2))) {
    console.log("Permission 3 Granted")
}
else {
    console.log("Permission 3 Denied")
}
if (parseInt(userPermission.charAt(3))) {
    console.log("Permission 4 Granted")
}
else {
    console.log("Permission 4 Denied")
}
if (parseInt(userPermission.charAt(4))) {
    console.log("Permission 5 Granted")
}
else {
    console.log("Permission 5 Denied")
}
if (parseInt(userPermission.charAt(5))) {
    console.log("Permission 6 Granted")
}
else {
    console.log("Permission 6 Denied")
}


render() {
    let navbar = <Newsfeed />

    if (parseInt(userPermission.charAt(0))) {
        navbar += <Inventory />;
    }
    if (parseInt(userPermission.charAt(1)))
        navbar += <ClientSmall />;
    }

    return (
        <div>
            {navbar}
        </div>
    );
}