const repeatString = function(myString, repeats) {
    let newString = '';

    for (let i = 0; i < repeats; i++){
        newString = newString + myString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
