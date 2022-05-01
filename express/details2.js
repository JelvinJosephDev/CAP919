var expr = require("express");
var app = expr();

// Home Route
app.get("/", (req, res) => {
  res.send("You can go to http:localhost:3000/about , http:localhost:3000/academics, http:localhost:3000/phone, http:localhost:3000/address")
});

// first route
app.get("/home", (req, res) => {
    res.send("You can go to http:localhost:3000/about , http:localhost:3000/academics, http:localhost:3000/phone, http:localhost:3000/address")
  });

// second route
app.get("/about", (req, res) => {
    var detailObj = {
      firstName: "Jelvin",
      secondName: "Joseph",
      section: "D1903",
      universityName: "Lovely Professional University",
      courseName: "BCA",
      currentAddress: "Phantom Hive House, ABC Street, XYZ State, Pin: 12345"
    }
    res.send(detailObj)
  });

// third route
app.get("/academics", (req, res) => {
    var academicObj = {
      section: "D1903",
      universityName: "Lovely Professional University",
      courseName: "BCA"
    }
    res.send(academicObj)
  });

// fourth route
app.get("/phone", (req, res) => {
    var phoneObj = {
      primaryNumber: "123456789",
      secondaryNumber: "987654321"
    }
    res.send(phoneObj)
});

// fifth route
app.get("/address/address2", (req, res) => {
    var addressObj = {
        currentAddress: "Phantom Hive House, ABC Street, XYZ State, Pin: 12345",
        officeAddress: "XYZ House, DEF Street, JKL State, Pin: 98746"
    }
    res.send(addressObj)
});

app.listen(3000)
{
  console.log("Server is running");
}
