var data = require('./strings');
var people = data.mvp.people.split("\n");
var companies = data.mvp.companies.split("\n");

printData(people);
printData(companies);

function printData(group) {
  // get max column width
  var columnWidths = longestWord(group)
  // get rows
  for (var i = 0; i < group.length; i++) {
    var row = group[i].split(',');
    // add padding to data in each row
    for (var j = 0; j < columnWidths.length; j++) {
      row[j] = addPadding(row[j], columnWidths[j], " ");
    }
    console.log(row.join(' | '));
    // logic for table header
    if (i == 0) {
      var setWidth = Array(columnWidths.length)
      for (var j = 0; j < columnWidths.length; j++) {
        setWidth[j] = addPadding("", columnWidths[j], "-")
      }
      console.log(setWidth.join(" | "));
    }
  }
}

function addPadding(str, length, paddingType) {
  var totalPadding = length - str.length;
  str = str + Array(totalPadding + 1).join(paddingType)
  return str;
}

function longestWord(group) {
  //array to hold values for longest words
  var counter = [];
  //get number of columns
  for (var i = 0; i < group.length; i ++) {
    var row = group[i].split(",");
    var columns = row.length;
  }
  // set counter.length == columns
  for (j = 0; j < columns; j++){
    counter.push(0);
  }
  // find length of longest word per column
  for (var i = 0; i < group.length; i++) {
    var row = group[i].split(",");
    for (var j = 0; j < columns; j++) {
      if (row[j].length > counter[j]) {
        counter[j] = row[j].length;
      }
    }
  }
  return counter;
}
