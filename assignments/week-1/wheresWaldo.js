// The second argument/parameter is expected to be a function

// function refactored to use anoymous fn for the cb fn that is in fn call
function findWaldo(arr, cb) {

  arr.forEach((name, index) => {
    if (name === "Waldo") {
      cb(index);
    }
  })
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found him at index: ", index);
});

var num = [1, 2, 3, 4, 5];

// function findWaldo(arr, found) {

//     arr.forEach((name, index) => {
//       if(name === "Waldo"){
//         found(index);
//       }
//     })

// // from PP, knew that the forEach allows index to get passed as well
//   // arr.forEach((name) => {
//   //   if(name === "Waldo"){
//   //     found(arr.indexOf(name));
//   //   }
//   // })
// }

// function actionWhenFound(index) {
//   console.log("Found him at index: ", index);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

  //refactor with forEach
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i); // execute callback
  //   }
  // }