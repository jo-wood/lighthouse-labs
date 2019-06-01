/*jshint esversion:6*/


function reverse(str){

  let strArray = str.split(' '),
      //strLength = strArray.length,
      revStr = [];

  for (let word of strArray) {
    let newEnding = word[0] + 'ay';
    word = word.slice(1, word.length);
    word += newEnding;
    revStr.push(word);
  }

  revStr = revStr.join(' ');
  return revStr;

}

console.log(reverse("this is all gibberish"));
