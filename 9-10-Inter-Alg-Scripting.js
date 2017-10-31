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

/////////////////////////////////////////////////////////////////////////////////////////
// Roman Numeral Converter
/////////////////////////////////////////////////////////////////////////////////////////

function convertToRoman(num) {
  // create a javascript object with possible numeral characters up to 3000 (max numeral of 3999)
  // '0's added to deal with 'round' numbers like 50, 500, 5000; returns '' instead of undefined
  var rom = {
   '0': '','00': '','000': '','1': 'I','2': 'II','3': 'III','4': 'IV','5': 'V','6': 'VI',
   '7': 'VII','8': 'VIII','9': 'IX','10': 'X','20': 'XX','30': 'XXX','40': 'XL',
   '50': 'L','60': 'LX','70': 'LXX','80': 'LXXX','90': 'XC','100': 'C','200': 'CC',
   '300': 'CCC','400': 'CD','500': 'D','600': 'DC','700': 'DCC','800': 'DCCC',
   '900': 'CM','1000': 'M','2000': 'MM','3000': 'MMM'
  };
 
  var str = num.toString();                                    // convert to string so num can be indexed
  if (num < 11) {                                              // check size of num to determine what magnitude of numerals to add
    return rom[str];
  }
  if (num < 100) {
    return rom[str[0]+'0']+rom[str[1]];                        // e.g. for 56 str[0] is '5', + '0' is '50'; correct numeral retrieved
  }                                                            // str[1] is '6', so final numeral is 'LVI'
  if (num < 1000) {
    return rom[str[0]+'00']+rom[str[1]+'0']+rom[str[2]];       // continue this logic for larger numbers
  }
  if (num < 4000) {
    return rom[str[0]+'000']+rom[str[1]+'00']+rom[str[2]+'0']+rom[str[3]];
  }
}

////////////////////
// Alternative solution:

function convertToRoman(num) {
  var romans = [
  // 10^i 10^i*5
    ["I", "V"], // 10^0
    ["X", "L"], // 10^1
    ["C", "D"], // 10^2
    ["M"]       // 10^3
  ],
      digits = num.toString()                                       // you can define multiple variables at once
        .split('')
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";
  
  // Loop through each digit, starting with the ones place
  for (var i=0; i<digits.length; i++) {
    // Make a Roman numeral that ignores 5-multiples and shortening rules
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    // Check for a Roman numeral 5-multiple version
    if (romans[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
        // Shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }
  
  return numeral;
}
