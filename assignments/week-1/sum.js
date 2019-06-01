/*jshint esversion:6*/

var myArgs = process.argv.slice(2, 4);

let argOne = myArgs[0],
    numOne = parseInt(argOne),
    argTwo = myArgs[1],
    numTwo = parseInt(argTwo);

let sum = numOne + numTwo;


console.log('myArgs: ', myArgs);
console.log('sum = ', sum);
