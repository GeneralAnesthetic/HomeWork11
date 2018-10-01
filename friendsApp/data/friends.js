// Your friend data goes here
var friendsArray = [
  {
    name: "Garry",
    photo:
      "https://images.pexels.com/photos/1362908/pexels-photo-1362908.jpeg?auto=compress&cs=tinysrgb&h=350",
    scores: [3, 1, 5, 3, 5, 3, 3, 2, 3, 2]
  },
  {
    name: "Barry",
    photo:
      "https://images.pexels.com/photos/256621/pexels-photo-256621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Jerry",
    photo:
      "https://images.pexels.com/photos/209620/pexels-photo-209620.jpeg?auto=compress&cs=tinysrgb&h=350",
    scores: [2, 1, 3, 1, 5, 1, 2, 3, 1, 1]
  },
  {
    name: "Terry",
    photo:
      "https://images.pexels.com/photos/52507/alcohol-hangover-event-death-52507.jpeg?auto=compress&cs=tinysrgb&h=350",
    scores: [5, 4, 4, 4, 5, 5, 5, 5, 4, 4]
  },
  {
    name: "Perry",
    photo:
      "https://photos.gograph.com/thumbs/CSP/CSP891/guy-with-a-mug-of-beer-eps-vector_k8914634.jpg",
    scores: [5, 3, 4, 4, 5, 4, 3, 4, 4, 2]
  },
  {
    name: "Marry",
    photo:
      "https://photos.gograph.com/thumbs/CSP/CSP741/alcoholic-vector-stock_k7416308.jpg",
    scores: [2, 2, 3, 2, 2, 1, 3, 2, 4, 2]
  },
  {
    name: "Kerry",
    photo:
      "https://photos.gograph.com/thumbs/CSP/CSP755/valkyrie-drunk-vector-art_k20643057.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Gus",
    photo:
      "https://photos.gograph.com/thumbs/CSP/CSP995/drunk-man-vector-illustration_k16919710.jpg",
    scores: [5, 1, 1, 1, 5, 5, 5, 5, 4, 5]
  },
  {
    name: "Aubrey",
    photo:
      "http://www.clker.com/cliparts/b/d/3/f/15161646691533231543free-clipart-of-drunks.med.png",
    scores: [3, 3, 2, 4, 3, 3, 4, 4, 4, 4]
  },
  {
    name: "Sherry",
    photo:
      "https://images.pexels.com/photos/1230397/pexels-photo-1230397.jpeg?auto=compress&cs=tinysrgb&h=350",
    scores: [5, 3, 3, 3, 2, 5, 5, 5, 1, 4]
  }
];
console.log(friendsArray[0].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[1].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[2].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[3].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[4].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[5].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[6].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[7].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[8].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[9].scores.reduce((a, b) => a + b, 0));

console.log(friendsArray[9].scores);
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

//     // not sure we need a .each(function (i, element){ if (this.selectedIndex = 0) }) here, we do want to loop through and find what was selected though

// $(".btn btn-lg btn-primary float-right").on("click", function () {
// Example from StackOverflow:

//             <select id="mySelect" multiple="multiple">
//   <option value="1">First</option>
//   <option value="2">Second</option>
//   <option value="3">Third</option>
//   <option value="4">Fourth</option>
// </select>

// <script type="text/javascript">
// $(document).ready(function() {
//   if (!$("#mySelect option:selected").length) {
//     $("#mySelect option[value='3']").attr('selected', 'selected');
//   }
// });
// </script>

//         var userInput1 = $(".dropdown-header col-sm-1").val();
//         var userInput2 = [];
//         userInput2.push(userInput1);
//         console.log(userInput);
//         // not sure if this will be used
//         // function multiplyArray(num) {
//         //     return num * userInput2;
//         // }
//         var friends = [];
//         console.log(friends);
//         $.get('/data/friends', function (data) {

//             friends.push(data);
//         })

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

//         // console.log(compare);
//         // for (var i = 0; i < userInput2; i++) {
//         //     for (var y = 0; y < compare; y++) {
//         //         // var w =Math.min(userInput[i], compare2[y]);
//         //         // var z = userInput2[i] - compare2.length[y];
//         //         var x = math.min.apply(null, userInput2[i].map(Math.abs), compare[y].map(Math.abs));
//         //         empty.push(map(x));
//         //         console.log(empty);
//         //     }

//         // } console.log(x);
//         // console.log(empty);
//         // if (empty.reduce((a, b) => a + b, 0) === userInput2)
//         //     $.post("/friendsPage", userInput2)

//     })
// }
// function reset() { $("select").each(function () { this.selectedIndex = 0 }) }

//  Using a RegEx Pattern to remove spaces from searchedCharacter You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
// userInput = userInput.replace(/\s+/g, "").toLowerCase(); QUESTION: What does $.get do? What are the parameters it is expecting?
// Must have a .get to draw from the phony friends data to manipulate it here! BodyParser makes sure all of the data is uniform
// from req and res unless you are trying to manipulate a new array, then it will have to be converted into an object. Handlbars
// only manipulates objects.All of your code, pretty much needs to be in the .get and .post on-click submit .post uses req.body
// or req.params. You can insert user submitted info into req.body and 'get' it on the server page data the client sends to
// the server is .post remember post uses req.body and re.params console.log(data); var newArray = []; if (data) {for (var i
// = 0; i < userInput.length; i++){for (var y=0 ; y < data.scores; y++){ var z=M ath.min(userInput[i], data.scores[y]; } $(
//     "#stats").show(); $( "#name").text(data.name); $( "#role").text(data.role); $( "#age").text(data.age); $( "#force-points").text(data.forcePoints);
//     some examples of functions that get and function renderFriendsPage(req, res) { fs.readFile(__dirname + "/index.html", function(err,
//     data) { if (err) { res.writeHead(500, { "Content-Type": "text/html" }); res.end( "
// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//  an html file. res.writeHead(200, { "Content-Type ": "text/html
//     " }); res.end(data); } }); }
// POST EXAMPLE - function renderThankYouPage(req, res) {Saving the request posted data as a variable. var requestData = " "; var myHTML = " ";  When the server receives data, it will add it to requestData. req.on( "data ", function(data) { requestData
//             +=d ata; console.log( "You just posted some data to the server:\n ", requestData); myHTML=" When the request
//     has ended... req.on( " end ", function() { res.writeHead(200, { "Content-Type ": "text/html
//             " }); res.end(myHTML);
