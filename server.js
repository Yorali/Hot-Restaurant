var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = 400;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [
    {
        unformattedName : "Nakamura Suzuki",
        name: "Nakamura",
        mobile: 81-243-5263-5234,
        email: "mushimushi@ww.com",
        resID: 700
    }, {
        unformattedName : "Takeshi Sana",
        name: "Kasuga",
        mobile: 81-343-5263-5234,
        email: "mushimushi@ww.com",
        resID: 701
    }, {
        unformattedName : "Mio Mai",
        name: "Mai",
        mobile: 81-643-5263-5234,
        email: "mushimushi@ww.com",
        resID: 702
    }, {
        unformattedName : "Yasashii Emi",
        name: "Emi",
        mobile: 81-443-5263-5234,
        email: "mushimushi@ww.com",
        resID: 703
    }
]

// First page, then to AJAX
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables.html", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    // Get all reservations
    res.json(reservations)
});

//

// Search for individual reservation

//

// Create new reservation
app.post("/api/new", function(req, res) {
    var newReservation = req.body;
    newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

// Begin server listening
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});
