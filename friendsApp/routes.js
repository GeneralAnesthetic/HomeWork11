var friendsData = require("../friendsPage");

module.exports = function(app) {
  app.get("/data/friends", function(req, res) {
    res.json(friendsData);
  });
  app.post("/data/friends", function(req, res) {
    if (res) {
      res.push(req.body);
      res.json(true);
    } else {
      res.json(false);
    }
  });
};
