/////////////////////////////////////////////////////////////////////////////////////////
// Dealing with numbers
/////////////////////////////////////////////////////////////////////////////////////////

myVar++;
// this is equivalent to:
myVar = myVar + 1;

myVar--;
// this is equivalent to:
myVar = myVar - 1;

// % divides and gives the remainder
// 17 % 2 = 1 (17 is Odd); 48 % 2 = 0 (48 is Even)
myVar = 11 % 3;

// use += -= *= /= to quickly reassign the value of a variable
myVar += 3;
// is the same as
myVar = myVar + 3;

/////////////////////////////////////////////////////////////////////////////////////////
// Dealing with strings
/////////////////////////////////////////////////////////////////////////////////////////

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // the backslash escapes a quote 

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; // or you can use single and double quote marks together

var myStr = "FirstLine\n\\SecondLine\\\rThirdLine"; // other characters can be escaped: \\, \n, \r, \t, \b, \f

var myStr = 'This is the start. ' + 'This is the end. '; // use '+' to concatenate strings
myStr += 'This is another sentence.'; // Use += to add another part to a string quickly

myName = "Laurence";
myStr = "My name is " + myName + " and it is swell!";

lastNameLength = lastName.length; // length.x gives the length of a string

firstLetterOfLastName = lastName[0]; // [x] gives the character at a specific index of a string

var lastLetterOfLastName = lastName[lastName.length - 1];

/////////////////////////////////////////////////////////////////////////////////////////
// Dealing with arrays
/////////////////////////////////////////////////////////////////////////////////////////

var myArray = ["Laurence", 23]; // an array

myArray[0] = 3; // Unlike strings, arrays are mutable (i.e. they can be changed)

var myArray = [["Laurence", 23], ["Arsenal", 4]]; // a nested/ multidimensional array

var myData = myArray[1][0]; // to access data from a multidimensional array, you use two brackets as such

myArray.push(["dog", 3]); // use .push to ammend data (including other arrays) to the end of an array

var removedFromMyArray = myArray.pop(); // .pop() removes the last item from an array and stores it

var removedFromMyArray = myArray.shift(); // .shift() does the same but for the first item

myArray.unshift(["Paul", 35]); // unshift does the same as push, but for the start of an array

/////////////////////////////////////////////////////////////////////////////////////////
// Dealing with functions
/////////////////////////////////////////////////////////////////////////////////////////

function functionWithArgs(a, b) {       // define the function
  console.log(a + b);
}

functionWithArgs(231, 823);             // call the function

var myVar = 1   // using var inside a function means that variable has local scope
globalVar = 1   // even when defined inside a function, without var this variable has global scope

/////////////////////////////////////////////////////////////////////////////////////////
// Dealing with booleans & if statements
/////////////////////////////////////////////////////////////////////////////////////////

// true and false are booleans - they are never written in quotes

function trueOrFalse(wasThatTrue) {
  
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  
  else {
    return "No, that was false";
}}

/* In order for JavaScript to compare two different data types (for example, numbers and strings), 
it must convert one type to another. Once it does, however, it can compare terms as follows: */

1   ==  1    // true
1   ==  2    // false
1   == '1'   // true
"3"  ==  3    // true

/* Strict equality (===) is the counterpart to the equality operator (==). 
Unlike the equality operator, strict equality tests both the data type and value of the compared elements. */
  
3 === 3   // true
3 === '3' // false

// Not equal to

3 != 4; // true
3 != '3' // false

// Strict inequality

3 !== 3 //false
3 !== '3' // true
  
// For when you want two operands to be tested
// Use && //(AND)

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

// For when you want either/ or operand to be true
// Use || (OR)

if (num < 5 || num > 10) {
  return "Outside";
}
return "Inside";

/////////////////////////////////////////////////////////////////////////////////////////
// N.B., this (below):

function isEqual(a,b) {
  return a === b;
}

// is the same as this, just more concise:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////
// Switches
/////////////////////////////////////////////////////////////////////////////////////////

// Used to test many options with strict equality
// example
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:                          // use default for when no matching case statements are found
      answer = "greek letter";
  } 
  return answer;  
}
// change this value to test
caseInSwitch(3);

/* If the break statement is omitted from a switch statement's case, 
the following case statement(s) are executed until a break is encountered. */

function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;  
}
// Change this value to test
sequentialSizes(1);

/////////////////////////////////////////////////////////////////////////
// For another example of how switches work, below is a card counting app:

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  
  if (count > 0) {
    return count + " Bet";
  }
  
  else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/////////////////////////////////////////////////////////////////////////////////////////
// Dealing with javascript objects
/////////////////////////////////////////////////////////////////////////////////////////

// Similar to arrays, but instead of using an index to extract/ modify data, they use properties.
// Syntax:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// Accessing object properties
// You can use dot notation:

var nameValue = cat.name;
var tailsValue = cat.tail;

// You can use bracket notation:

var nameValue = cat["name"];
var tailsValue = cat["tails"];

// Bracket notation can also use variables to look up a property

var someProp = "propName";
var myObj = {
  propName: "Some Value"
}
myObj[someProp]; // "Some Value"
