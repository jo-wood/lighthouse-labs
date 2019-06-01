

var runSort = function(arr){

  if (typeof arr[0] === 'string') {
    return arr.sort();
  } else if (typeof arr[0] === 'number'){
      arr.sort((a, b) => {
        return a - b;
      });
    return arr;
  }

}

module.exports = {

  sorted: function(list){
    runSort(list);
  return list;
  }
} // end exports