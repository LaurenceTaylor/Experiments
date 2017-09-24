// Constructor functions can also be used to create objects
// Acts as a description for the object it will create
// Example:

var Car = function() {      // function name starts with a capital, to make it clear it is a constructor
  this.wheels = 4;          // 'this' variable refers to the new objects being created by the constructor
  this.engines = 1;
  this.seats = 5;
};

