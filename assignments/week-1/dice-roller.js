/*jshint esversion:6*/

let arg = (process.argv)[2];

const rollDice = function(num) {
  let storeResults = "",
      finalOutput = "Rolled " + num + ' dice: ';


  for (num; num > 0; num--){
    let result = Math.ceil(Math.random()*6); //6 faces on dice
    if (num === 1){
        storeResults += result;
      }
    else {
        storeResults += result + ', ';
    }
  }//end for

  return finalOutput + '' + storeResults;

}; //end rollDice

console.log(rollDice(arg));
