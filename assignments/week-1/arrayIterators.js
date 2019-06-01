// TEST filter()

// var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// var evens = numbers.filter(function(num)) {
//   return (num % 2 === 0);
// });
// console.log("Subset of even numbers:", evens);


// TEST map()

// var array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(array1.filter(function(num) {
//   var message = "here's one!: " + num;
//   if (num % 2 === 0){
//     return console.log(message);
//   }
  
// }));

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

// TEST map()

var input = [{
    x: 3,
    y: 4
  },
  {
    x: 12,
    y: 5
  },
  {
    x: 8,
    y: 15
  }
];
var result = input.map((obj) => {
  let pyth = Math.pow(obj.x, 2) + Math.pow(obj.y, 2);
  return Math.sqrt(pyth);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);