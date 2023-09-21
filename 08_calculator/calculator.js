const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(a, b ) {
	return a - b;
};

const sum = function(myArray) {
	return myArray.reduce((total, item) => total + item, 0)
};

const multiply = function(myArray) {
    return myArray.reduce((total, item) => total * item, 1)
};

const power = function(a, b ) {
	return Math.pow(a, b);
};

const factorial = function(a ) {
	let total = 1;
    if(a>1){
        for(let i=0; i<a; i++){
            total *= a - i
        }
    }
    return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};