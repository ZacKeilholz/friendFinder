// ===============================================================================
// DATA
// Initial Friend Data
// ===============================================================================

var friendsData = [
  {
    name: 'zac',
    photo: 'www.google.com',
    scores: ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2']
  },
  {
    name: 'Meghan',
    photo: 'https://cdn1.img.sputniknews.com/images/106467/33/1064673347.jpg',
    scores: ['2', '1', '4', '3', '4', '2', '1', '3', '4', '2']
  }

];

//Main Function- Compares recently added score (end of user object array) with list of other users and outputs the user object most similar. 
function getMatch() {
  var bestMatch = {
    scoreDifference:40,
    playerIndex:0
  };
  
  //Sum Recently Added User Score Array
  var recentScore = sumArray(friendsData[friendsData.length - 1].scores);

  //Compare userScore to other player scores
  for (var i=0; i<friendsData.length-1; i++ ) {

    //Get difference between userScore and score from player on list
    var difference = Math.abs(recentScore-sumArray(friendsData[i].scores));

    if (difference<bestMatch.scoreDifference) {
      bestMatch.scoreDifference = difference;
      playerIndex = i;
    }
  };

console.log(friendsData[bestMatch.playerIndex]);
};


//Helper Function Used to Sum Input Arrays
function sumArray(arr) {
  var total = 0;
  arr.forEach(function (element) {
    total += parseInt(element);
  });
  return total;
}


// Note how we export the array. This makes it accessible to other files using require.

module.exports.friendsData = friendsData;
module.exports.getMatch = getMatch;
