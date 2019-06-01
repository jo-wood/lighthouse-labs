

var newList = require("./addToList"),
    list = newList.list,
    sortData = require("./sortData"),
    sorted = sortData.sorted;

    
function runUpdate(item){
  return newList.addItem(item);
}


//* if strings:
// runUpdate('l');
// runUpdate('b');
// runUpdate('z');
// runUpdate('e');
// runUpdate('a');


//* if numbers:
runUpdate(4);
runUpdate(12);
runUpdate(10);
runUpdate(3);
runUpdate(1);


console.log(sorted(list));
