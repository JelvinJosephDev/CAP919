var expr = require("express");
var app = expr();

// Home Route
app.get("/", (req, res) => {
  res.send("Please go to http:localhost:3000/about")
});

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

app.listen(3000)
{
  console.log("Server is running");
}
