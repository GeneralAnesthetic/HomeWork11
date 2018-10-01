var path = require("path");
var friends = require("../data/friends.js");
module.exports = function(app) {
  // If no matching route is found default to home
  // app.get( function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  // 'REQ' BELOW EQUATES TOO: ROUTE THAT THE USER SELECTS/ENTERS
  // app.get("/friendsPage", function(req, res) {
  //   res.sendFile(
  //     "C:/Users/Brain/Desktop/HomeWork11/friendsApp/public/friendsPage.html"
  //   );
  // });
  app.get("/api/friends", function(req, res) {
    var myHTML =
      "<html><footer><button onclick='goBack()'> Go Back </button></footer></html>";
    myHTML += "<script> function goBack(){window.history.back()}</script>";

    res.json(friends);

    // function doIt() {
    //   if (myHTML) {
    //     function goBack() {
    //       window.history.back();
    //     }
    //   } else {
    //     throw console.error();
    //   }
    // }
    // res.render("/api/friends", myHTML);
  });
  //   res.json(friends);

  app.post("/api/friends", function(req, res) {
    if (res) {
      res.push(req.body);
      res.json(true);
    } else {
      res.json(false);
    }
    // var reqInfo = req.body;

    // var result = reqInfo.map(function(x) {
    //   return parseInt(x, 10);
    // });

    // console.log(result);
    // res.json(friends);
    console.log("friendsArray", friends);
    console.log("req.body", req.body);
    // var filterInt = reqInfo.each(function(value) {
    //   if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    //     return newArray.push(Number(value));
    //   return NaN;
    // });
    // try {
    //   newArray.push(JSON.parse(reqInfo)); // this is how you parse a string into JSON
    // } catch (ex) {
    //   console.error(ex);
    // }
    // for (i = 0; i < reqInfo; i++) {
    //   return Number(reqInfo[i]);
    // }

    // var filterInt = function(value) {
    //   if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
    //   return NaN;
    // };
    // console.log(filterInt(req.body));
    // var reqInfo = parseInt(req.body);
    // var newArray = [];
    // newArray.push(reqInfo);
    // var i = reqInfo.length;
    // while (i--) !/\S/.test(reqInfo[i]) && reqInfo.splice(i, 1);
    // console.log(reqInfo);
    // function removeWhiteSpaceFromArray(reqInfo) {
    //   return reqInfo.filter(item => item != " ");
    //   console.log(reqInfo);
    // }
    // removeWhiteSpaceFromArray();
    // var i = reqInfo.length;
    // while (i--) !/\S/.test(reqInfo[i]) && reqInfo.splice(i, 1);
    // reqInfo = reqInfo
    //   .filter(function(item) {
    //     return item !== "\n";
    //   })
    //   .map(function(item) {
    //     return item.replace(/\n/g, "");
    //   });
    // reqInfo.filter(function(str) {
    //     return /\S/.test(str);
    //     });

    // newArray
    //   .split(" ")
    //   .join("")
    //   .split("");

    //         $.post("/api/friends", function (req, res) {

    //             var matchName = '';
    //             var matchPic = '';
    //             var totalDiff = 10;

    //             for (var i = 0; i < friends.length; i++) {
    //                 console.log('friend = ' + JSON.stringify(friends[i]));

    //                 var diffy = 0;
    //                 for (var j = 0; j < userInput2.length; j++) {
    //                     diffy += Math.abs(friends[i].scores[j] - userInput2[j]);
    //                 }
    //                 console.log(diffy);
    //                 if (diffy < totalDiff) {

    //                     totalDiff = diffy;

    //                     matchName = friends[i].name,
    //                         matchPic = friends[i].photo

    //                 }
    //             }

    //             console.log("object being sent: ", { matchName: matchName, matchPic: matchPic });
    //             console.log("friends: ", friends);
    //             console.log("userInput: ", userInput2);

    //         }).done(function (data) {
    //             console.log(data);
    //             friends.push(userInput2);
    //             res.send({ status: 200, matchName: matchName, matchPic: matchPic });;

    //         })

    // req.params
    // This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.

    // req.body
    // Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.

    // var newFriend = req.body.matchName;
    // var newFriendImage = req.body.matchPic;
    // res.json({ newFriend: newFriend, newFriendImage: newFriendImage });
  });
  app.post("/clear", function() {
    // Empty out the arrays of data
    arr = [];
  });
};

//   app.get("/data/friends", function(req, res) {
//     console.log(res);
//     res.json(res);
//   });
