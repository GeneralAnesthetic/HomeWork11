var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  // 'REQ' BELOW EQUATES TOO: ROUTE THAT THE USER SELECTS/ENTERS
  app.get("/friendsPage", function(req, res) {
    res.sendFile(path.join(__dirname, "friendsPage"));
  });
  //   app.get("/data/friends", function(req, res) {
  //     console.log(res);
  //     res.json(res);
  //   });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });
};
