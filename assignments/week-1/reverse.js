/*jshint esversion:6*/


function reverse(str){
  let strArray = str.split(''),
      lastLetter = strArray.length - 1,
      revArray = "";

  for (let i =  lastLetter ; i >= 0; i--){
    revArray += strArray[i];
  }

return revArray;
}

console.log(reverse("goodbye"));
