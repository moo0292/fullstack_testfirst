// # Topics
// * strings
//
// # Pig Latin
//
// Pig Latin is a made-up children's language that's int});ed to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.
//
// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the }); of the word.
// Rule 2: If a word begins with a consonant sound, move it to the }); of the word, and then add an "ay" sound to the }); of the word.
//
// (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)
//
// See <http://en.wikipedia.org/wiki/Pig_latin> for more details.

//1. create an array to hold all the text by splitting up the text with space
//2. loop through the array

var translate = function(input){
  //split the array
  var inputSplit = input.split(" ");
  var finalString = "";
  //loop through each split
  for (var i = 0; i < inputSplit.length; i++){
    var vowelLocation = 0;
    var returnString = "";
    //check if the first letter is 
    for (var j = 0; j < inputSplit[i].length; j++){
      //search for the a e i o u. if found get the number 
      if (inputSplit[i].charAt(j).toLowerCase() == "a" || inputSplit[i].charAt(j).toLowerCase() == "e" || inputSplit[i].charAt(j).toLowerCase() == "i" || inputSplit[i].charAt(j).toLowerCase() == "o"){
        var vowelLocation = j;
        break;
      }
    }

    //once your find the location, substring from the vowel location to the end, then add the front to the end, then add ay
    returnString += inputSplit[i].substring(vowelLocation, inputSplit[i].length);
    returnString += inputSplit[i].substring(0, vowelLocation);
    returnString += "ay"
    //need to set the current value to the new one instead
    inputSplit[i] = returnString;
    console.log(inputSplit[i]);
  }

  //combine back
  for (var i = 0; i < inputSplit.length; i++){
    if (i == inputSplit.length - 1) {
      finalString += inputSplit[i];
    }
    else {
      finalString += inputSplit[i] + " ";
    }
  }

  return finalString;
}

