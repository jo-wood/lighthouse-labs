function isPalindrome(str) {
  var noSpaces = str.split(" ").join("");
      noSpaces = noSpaces.toLowerCase();
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;
  var result = true;

  //edge case of 1 letter
  if (last === 0){
    return true;
  }

  //compare front end to back end of string
  for (var i = 0; i < mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) {
      result = false;
      return false;
    }
  }

  return result;
}// end of isPalindrome

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('race car') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
