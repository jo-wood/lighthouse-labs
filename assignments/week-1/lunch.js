/*jshint esversion:6*/

/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

function whatToDoForLunch(hungry, availableTime) {

  let  message = "",
  firstOption = "Keep on working, but make sure you break soon!",
  secondOption = "This is a bootcamp afterall, maybe you should keep working!",
  thirdOption = "You have enough time to go take a break in Gastown!!",
  fourthOption = "Not a lot of time! Better be quick and grab lunch-to-go!",
  errorMessage = "uh oh... something went wrong with your input?!";


  if (!hungry) {
    message += firstOption;
  } else if (hungry) {
    if (availableTime > 30) {
      message += secondOption;
    } else if (availableTime <= 30 && availableTime >= 20){
      message += thirdOption;
    } else if (availableTime < 20) {
      message += fourthOption;
    } else {
      message += errorMessage;
    }

  }
return console.log(message);
}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
