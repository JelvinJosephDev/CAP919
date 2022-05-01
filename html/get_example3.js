var express = require("express");
var app = express();

app.get("/home", function (req, res) {
  res.send(
    '<form action="http://192.168.1.3:8000/get_example3" method="GET"><table><tr><td>Enter First Name:</td><td><input type="text" name="firstname"/><td></tr><tr><td>Enter Last Name:</td><td><input type="text" name="lastname"/><td></tr><tr><td>Enter Password:</td><td><input type="password" name="password"/></td></tr><tr><td>Sex:</td><td><input type="radio" name="Gender" value="male"> Male<input type="radio" name="Gender" value="female">Female</td></tr><tr><td>About You :</td><td><textarea rows="5" cols="40" name="aboutyou" placeholder="Write about yourself"></textarea></td></tr><tr><td colspan="2"><input type="submit" value="register"/></td></tr></table></form>'
  );
});

app.get("/get_example3", function (req, res) {
  res.send(
    "<p>Firstname: " +
      req.query["firstname"] +
      "</p> Lastname: " +
      req.query["lastname"] +
      "</p>Password: " +
      req.query["password"] +
      "</p>AboutYou: " +
      req.query["aboutyou"] +
      "</p>"
  );
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
