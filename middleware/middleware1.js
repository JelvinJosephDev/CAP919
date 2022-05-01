var express = require("express");
var app = express(); //
app.use("/classes", function (req, res, next) {
  console.log("A request for Express Class received at " + Date.now());
  next();
});
app.use("/classes", function (req, res, next) {
    const d = new Date();
    // d.getDate();
    // d.getMonth();
    // d.getFullYear();
    res.send("<h1>Todays date is: " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + "</h1>");
    next();
});
app.use("/classes", function (req, res, next) {
    const d = new Date();
    res.send("<h1>Current time is: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</h1>");
});


app.listen(3000);
