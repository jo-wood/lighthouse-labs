// var array = ["John", "Bob", "Alice", "Mary"];
// console.log(array.sort());

// sort with numbers:
// var array = [10, 2, 5, 1, 9];
// array.sort((a, b) => {return b - a});

// console.log(array);

// advanced sorting
var students = [{
    id: 1,
    name: "bruce",
    age: 40
  },
  {
    id: 2,
    name: "zoidberg",
    age: 22
  },
  {
    id: 3,
    name: "alex",
    age: 22
  },
  {
      id: 8,
        name: "jeff",
        age: 22
      },
  {
    id: 4,
    name: "alex",
    age: 30
  },
  {
      id: 6,
      name: "aaron",
      age: 30
  }
];

console.log(students);
students.sort((objA, objB) => { 
  if (objA.name === objB.name){
    return  (objA.age < objB.age);
  } else {
    return (objA.name > objB.name);
  } 

});

console.log(students);


