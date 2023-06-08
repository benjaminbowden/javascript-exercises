const reverseString = function(myString) {
let reversed = '';

for (let i=0; i < myString.length; i++){
   reversed = reversed.concat(myString[myString.length-1-i]);
}

return reversed;
};

// Do not edit below this line
module.exports = reverseString;
