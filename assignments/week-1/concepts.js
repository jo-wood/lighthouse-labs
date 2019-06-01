/*jshint esversion:6*/

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
//var conceptList = ["hello", "world"];
//var conceptList = ['solo'];


 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);


function joinList(arr){
  let lastConcept;

  if (arr.length > 1) {
    lastConcept = arr[arr.length - 1];
  } else {
    lastConcept = arr[0];
  }

  let listedConcepts = "";

  for (let concept of arr){
    if (concept === lastConcept){
      listedConcepts += concept;
    } else {
        let commaConcept = concept + ", ";
        listedConcepts += commaConcept;
    }

  }

  return listedConcepts;
}

console.log("Today I learned about " + concepts + ".");
