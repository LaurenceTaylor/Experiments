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
