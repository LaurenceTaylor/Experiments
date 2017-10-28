/////////////////////////////////////////////////////////////////////////////////////////
// Sum All Numbers in a Range
/////////////////////////////////////////////////////////////////////////////////////////

function sumAll(arr) {
  var total = 0;
  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {    // range from lowest to highest number in arr
    total += i;                                                                   // add i to total each iteration
  }
  return total;
}

////////////////////
// Advanced solution:

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){                   // similar solution, with spread operator ...arr
        sum += i;
    }
  return sum;
}
