// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


  app.get("/api/friends", function (req, res) {
    console.log("DATA REQ");
    res.json(friends.friendsData);
  });
  app.get("/api/match", function (req, res) {
    console.log("MATCH REQ");
    res.json(friends.getMatch);

  });


  app.post("/api/friends", function (req, res) {

    console.log("SUBMITTED");

    //Add New User to Array
    friends.friendsData.push(req.body);
    //Run Main function to retrieve match
    res.json(true);

  });
};
