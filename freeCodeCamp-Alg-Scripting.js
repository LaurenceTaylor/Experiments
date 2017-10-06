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
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
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

/////////////////////////////////////////////////////////////////////////////////////////
// Confirm the Ending
/////////////////////////////////////////////////////////////////////////////////////////

function confirmEnding(str, target) {
  return str.substr(- target.length) === target;
}

confirmEnding("Bastian", "n");

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
  if (str.length > num)
    return str.slice(0, num > 3 ? num-3 : num) + '...';       // this is a ternary operator - more below
  return str;
}

// Ternary operator syntax:
// condition ? expr1 : expr2 

// Condition/s evaluates to true or false.
// expr1 and expr2 are values of any type. If true, expr1 is returned. Otherwise, expr2 is.

/////////////////////////////////////////////////////////////////////////////////////////
// Chunky Monkey
/////////////////////////////////////////////////////////////////////////////////////////

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for (var i = 0; i < arr.length; i += size) {
    var temp = arr.slice(i, i + size)                    // creating this new var is unnecessary
    newArray.push(temp);                                 // better with newArray.push(arr.slice(i, i + size))
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/////////////////////////////////////////////////////////////////////////////////////////
// Slasher Flick
/////////////////////////////////////////////////////////////////////////////////////////

// Solution with slice
function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);     // N.B. I didn't need to state where to end the slice - arr.slice(howMany) would suffice.
}

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
  return arr.filter(Boolean);             // Boolean is an object
}

bouncer([7, "ate", "", false, 9]);

/////////////////////////////////////////////////////////////////////////////////////////
// Seek and Destroy
/////////////////////////////////////////////////////////////////////////////////////////
