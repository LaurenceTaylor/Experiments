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

var myArray = [["Laurence", 23], ["Arsenal", 4]]; // a nested/ multidimensional array
