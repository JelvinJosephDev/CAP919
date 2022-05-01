var express = require("express");
var app = express();

app.use("/ca2", function (req, res, next) {
  console.log("A request for CA2 received at " + Date.now());
  next();
});

app.use("/ca2", function (req, res, next) {
    const d = new Date();
    console.log("We're here");
    res.send("<h1>Todays date is: " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + "</h1>");
    next();
});

app.listen(3001)
{
    console.log("Server is running");
}  
