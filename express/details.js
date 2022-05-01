var expr = require("express");
var app = expr();
app.get("/", (req, res) => {
  var obj = {
    firstName: "Jelvin",
    secondName: "Joseph",
    section: "D1903",
    universityName: "Lovely Professional University",
    courseName: "BCA",
    currentAddress: "Phantom Hive House, ABC Street, XYZ State, Pin: 12345"
  }
  //res.send(obj);
  res.send("My detail is here" + obj)
});

app.listen(3000)
{
  console.log("Server is running");
}
