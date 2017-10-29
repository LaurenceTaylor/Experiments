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

/////////////////////////////////////////////////////////////////////////////////////////
// Diff Two Arrays
/////////////////////////////////////////////////////////////////////////////////////////

function diffArray(arr1, arr2) {
  var newArr = [];
  
  function loop(first, second) {
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) == -1) {                 // if value at index i of first array is not found in second array
        newArr.push(first[i]);                              // push value at index i to new array
      }
    }
  }
  
  loop(arr1, arr2);                                         // run the loop once in each direction (i.e. swap arr1 and arr2 order)
  loop(arr2, arr1);
  
  return newArr;
}


////////////////////
// Advanced solution:

function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))                    // uses filter + arrow functions. Filters arr1 for what isn't in arr2
      .concat(
        arr2.filter(el => !arr1.includes(el))              // concats to arr1 values in arr2 not in arr1.
      )
}
