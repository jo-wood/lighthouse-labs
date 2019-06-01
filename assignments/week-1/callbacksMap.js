var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, cb){
  var newResult = arr.map(function(word) {
    return cb(word);
  });
return console.log(newResult);
}


map(words, function (word) {
  return word.length;
});

map(words, function (word) {
  return word.toUpperCase();
});

map(words, function (word) {
  return word.split('').reverse().join('');
});
console.log(words)



//expected output:

// [6, 7, 2, 5, 3]

// ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]

// ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']



//// trying with closures (they aren't always more clean)

// var mapper = function (listOfThings) {
//   return function (cb) {
//     return map(listOfThings, cb)
//   }
// }

// var wordsMapper = mapper(words)

// wordsMapper(function (word) {
//   return word.length;
// });

// wordsMapper(function (word) {
//   return word.toUpperCase();
// });

// wordsMapper(function (word) {
//   return word.split('').reverse().join('');
// });