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
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      newArr.push(arr1[i]);
    }
  }
  
  for (var j = 0; j < arr2.length; j++)
    if (arr1.indexOf(arr2[j]) == -1) {
       newArr.push(arr2[j]);
    }
  
  return newArr;
}

////////////////////
// Advanced solution:

function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}
