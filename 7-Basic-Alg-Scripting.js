/////////////////////////////////////////////////////////////////////////////////////////
// Reverse a String
/////////////////////////////////////////////////////////////////////////////////////////

function reverseString(str) {
  str = str.split('');            // split the string into an array, no delimiter
  str = str.reverse();            // reverse the array
  str = str.join('');             // join the array back into a string, no delimiter
  return str;
}

reverseString("Greetings from Earth");

////////////////////
// Simpler solution:

function reverseString(str) {
  return str.split('').reverse().join('');
}

/////////////////////////////////////////////////////////////////////////////////////////
// Factorialize a Number
/////////////////////////////////////////////////////////////////////////////////////////

function factorialize(num) {
  var total = 1;                  // set total outside of loop, starting at 1 because we're multiplying
  for (i = 1; i <= num; i++) {    // set up for loop, with i running from 1 to num
    total *= i;                   // multiply running total by i each iteration
  }
  return total;
}

factorialize(5);

////////////////////
// Simpler solution:

function factorialize(num) {          // this solutions uses recursion instead
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Check for Palindromes
/////////////////////////////////////////////////////////////////////////////////////////

function palindrome(str) {
  forward = str.toLowerCase().replace(/[^a-z1-9]/g, '');        // remove special characters, change to lower case
  backward = forward.split('').reverse().join('');              // reverse by splitting string, reversing then joining
  if (forward == backward) return true;                         // check if forward and backward versions match
  else return false;
}

palindrome("eye");

////////////////////
// Simpler solution:

function palindrome(str) {
  var plainString = str.replace(/[\W_]/g, '').toLowerCase();
  return plainString === plainString.split('').reverse().join('');
}

/////////////////////////////////////////////////////////////////////////////////////////
// Find the Longest Word in a String
/////////////////////////////////////////////////////////////////////////////////////////

function findLongestWord(str) {
  var words = str.split(' ');                   // split string into separate words
  var max = 0;
  
  for (var i = 0; i < words.length; i++) {      // loop which iterates through the array of words
    if (words[i].length > max) {                // checks length of each word. If larger than max, it becomes the new max
      max = words[i].length;
    }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

////////////////////
// Solution with reduce:

function findLongestWord(str) {
  // split string into individual words
  return str.split(' ').
  reduce(function(mem, it) {
    return Math.max(mem, it.length);
  }, 0);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Title Case a Sentence
/////////////////////////////////////////////////////////////////////////////////////////

function titleCase(str) {
  var array = str.toLowerCase().split(' ');         // convert string into lowercase, split into separate words
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(array[i].charAt(0), array[i].charAt(0).toUpperCase());   // replaces first letter of each string
  }                                                                                      // charAt() to index
  return array.join(' ');
}

titleCase("I'm a little tea pot");

////////////////////
// Solution with map:

function titleCase(str) {
  var splitString = str.toLowerCase().split(' ');
  return splitString.map(function(a) {
    return (a.charAt(0).toUpperCase() + a.slice(1));
    //return a.replace(a.charAt(0), a.charAt(0).toUpperCase());
  }).join(' ');
}

/////////////////////////////////////////////////////////////////////////////////////////
// Return Largest Numbers in Arrays
/////////////////////////////////////////////////////////////////////////////////////////

function largestOfFour(arr) {
  var newArray = [];
  for (var a = 0; a < arr.length; a++) {
    max = 0;
    for (var b = 0; b < arr[a].length; b++) {
      if (arr[a][b] > max) {
        max = arr[a][b];
      }
    }
    newArray.push(max);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

////////////////////
// Solution with javascript methods:

function largestOfFour(arr) {
  var result = [];
  arr.map(function(a) {
    result.push(a.reduce((mem, it) => Math.max(mem, it)));
  });
  return result;
}

// Even shorter

function largestOfFour(arr) {
  return arr.map(function(subArr) {
    return subArr.reduce((a, b) => Math.max(a, b));
  });
}

/////////////////////////////////////////////////////////////////////////////////////////
// Confirm the Ending
/////////////////////////////////////////////////////////////////////////////////////////

function confirmEnding(str, target) {
  return str.substr(- target.length) === target;
}

confirmEnding("Bastian", "n");

////////////////////
// Using arrow function

var confirmEnding = (str, target) => str.slice(-target.length) === target;

/////////////////////////////////////////////////////////////////////////////////////////
// Repeat a string repeat a string
/////////////////////////////////////////////////////////////////////////////////////////

function repeatStringNumTimes(str, num) {
  var newString = '';
  if (num < 1) {                                // return '' if num is not a positive integer
    return '';
  }
  else {
    for (i = 0; i < num; i++) {
      newString = newString.concat(str);
    }
  }
  return newString;
}

repeatStringNumTimes("abc", 3);

////////////////////
// Simpler solution:

function repeatStringNumTimes(str, num) {
 if(num > 0){
    return str.repeat(num);                    // repeat is much more elegant
  }
  return '';
}

////////////////////
// Simpler still solution:

var repeatStringNumTimes = (str, num) => (num < 0) ? '' : str.repeat(num);

/////////////////////////////////////////////////////////////////////////////////////////
// Truncate a string
/////////////////////////////////////////////////////////////////////////////////////////

function truncateString(str, num) {
  if (num >= str.length) {                      
     return str;
  }
  else if (num > 3) {
    return str.slice(0, num - 3) + '...';
  }
  else return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 5);

////////////////////
// Simpler solution:

function truncateString(str, num) {
  var end = '...';
  if (str.length > num) {
    return str.slice(0, num < end.length ? num : num - end.length) + end;
  }
  return str;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Chunky Monkey
/////////////////////////////////////////////////////////////////////////////////////////

function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Slasher Flick
/////////////////////////////////////////////////////////////////////////////////////////

// Solution with slice
var slasher = (arr, howMany) => arr.slice(howMany);

// Solution with splice
function slasher(arr, howMany) {
  arr.splice(0, howMany); 
  return arr;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Mutations
/////////////////////////////////////////////////////////////////////////////////////////

function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1) {    // indexOf is case sensitive, so toLowerCase used
        return false;                                                     // if character in arr[1] not found in arr[0], return false
        }
  }
  return true;
}

mutation(["Mary", "Aarmy"]);

/////////////////////////////////////////////////////////////////////////////////////////
// Falsy Bouncer
/////////////////////////////////////////////////////////////////////////////////////////

function bouncer(arr) {
  return arr.filter(Boolean);             // Boolean returns true for truthy values and false for falsy ones
}

bouncer([7, "ate", "", false, 9]);

/////////////////////////////////////////////////////////////////////////////////////////
// Seek and Destroy
/////////////////////////////////////////////////////////////////////////////////////////

function destroyer(arr) {
  var args = Array.from(arguments);
  for (i = 0; i < args[0].length; i++) {
    for (j = 1; j < args.length; j++) {
      if (args[0][i] === args[j]) {
        delete args[0][i];
      }
    }
  }
  return args[0].filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/////////////////////////////////////////////////////////////////////////////////////////
// Where do I belong
/////////////////////////////////////////////////////////////////////////////////////////

function compareFunction(a, b) {        // prepare the compareFunction for sort
  return a - b;
}

function getIndexToIns(arr, num) {
  arr.sort(compareFunction);            // sort the array into ascending numerical order
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;                    // if no number in the array is greater or equal to num, return the array length
}

getIndexToIns([2, 5, 10], 15);

/////////////////////////////////////////////////////////////////////////////////////////
// Caesars Cipher
/////////////////////////////////////////////////////////////////////////////////////////

function rot13(str) {
  var unCaesar = '';    // empty string to concat with un-caesared characters
  
  for (i = 0; i < str.length; i++) {                                      // loop through ciphered string
    if (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\? .]/g.test(str[i])) {       // check if special character/ space/ full stop
      var n = str.charCodeAt(i);                                          // identify character code
      if (n >= 65 && n <= 77) {                                           // check which side of alphabet the letter is
        unCaesar = unCaesar.concat(String.fromCharCode(n + 13));          // if near the start then add 13 to character code
      }
      else unCaesar = unCaesar.concat(String.fromCharCode(n - 13));       // if near end then subtract 13 from character code
    }
    else unCaesar = unCaesar.concat(str[i]);                              // if a special character then concat as-is
  }
  return unCaesar;
}


// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
