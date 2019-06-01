/*jshint esversion:6*/

function password(string){
  let arrString =  string.split(''),
      newPassword = "";

  for (let letter of arrString){

    if ( letter === 'a') {
      newPassword += '4';
    } else if (letter === 'e'){
      newPassword += '3';
    } else if (letter === 'o'){
      newPassword += '0';
    } else if (letter === 'l'){
      newPassword += '1';
    } else {
      newPassword += letter;
    }
  } // arrString for loop

return newPassword;
}

console.log(password("password"));
