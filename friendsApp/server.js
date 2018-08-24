var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// var obj = {
//   name: data.name,
//   photo: data.photo,
//   scores: data.scores
// };
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require(path.join(__dirname, "/routes/htmlRoutes"))(app);
// the below is already in the above
// require(path.join(__dirname, "./public/index"))(app);
// require(path.join(__dirname, "/public/friendsPage"))(app);

// app.require("/data/friends.js");
// app.require("/routes/htmlRoutes");
// app.require("/public/friendsPage");
// app.require("/public/index");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
