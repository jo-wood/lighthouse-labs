var storedValues = [];

module.exports = {
  list: storedValues,
  addItem:  
    function (item) {
      storedValues.push(item);
      return this.list;
    }
} //end exports


// module.exports.addItem(2);
// module.exports.addItem(4);


