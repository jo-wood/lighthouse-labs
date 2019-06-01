function isPalindrome(s) {
  var noWhiteSpace = s.split(" ").join(''); //remove whitespace
  console.log(noWhiteSpace);
  
  var stringReverse = noWhiteSpace.split("").reverse().join("");
  console.log(stringReverse);
  

  return noWhiteSpace == stringReverse;
}

module.exports = isPalindrome;


