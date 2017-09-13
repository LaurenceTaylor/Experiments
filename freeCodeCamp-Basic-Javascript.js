#########################################################################################
// Dealing with numbers
#########################################################################################

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

#########################################################################################
// Dealing with strings
#########################################################################################

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

#########################################################################################
// Dealing with arrays
#########################################################################################

var myArray = ["Laurence", 23]; // an array

myArray[0] = 3; // Unlike strings, arrays are mutable (i.e. they can be changed)

var myArray = [["Laurence", 23], ["Arsenal", 4]]; // a nested/ multidimensional array

var myData = myArray[1][0]; // to access data from a multidimensional array, you use two brackets as such

myArray.push(["dog", 3]); // use .push to ammend data (including other arrays) to the end of an array

var removedFromMyArray = myArray.pop(); // .pop() removes the last item from an array and stores it

var removedFromMyArray = myArray.shift(); // .shift() does the same but for the first item

myArray.unshift(["Paul", 35]); // unshift does the same as push, but for the start of an array

#########################################################################################
// Dealing with functions
#########################################################################################

function functionWithArgs(a, b) {       // define the function
  console.log(a + b);
}

functionWithArgs(231, 823);             // call the function

var myVar = 1   // using var inside a function means that variable has local scope
globalVar = 1   // even when defined inside a function, without var this variable has global scope

#########################################################################################
// Dealing with booleans & if statements
#########################################################################################

// true and false are booleans - they are never written in quotes

function trueOrFalse(wasThatTrue) {
  
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  
  else {
    return "No, that was false";
  }

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
