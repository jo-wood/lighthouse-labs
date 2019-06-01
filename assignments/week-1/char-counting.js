



function countLetters(str) {

  var chars = str.split(' ').join('');

  var result = {};

  for (var char of chars) {
    if (result[char]){
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

return result;




//return uniqueChars;
}


console.log(countLetters('lighthouse is up yo yo yo yo yo yo in the house'));
