const removeFromArray = function(myArray, ...args) {
    const filteredArray = myArray.filter(item => !args.includes(item))
    console.log(filteredArray);
    return filteredArray;
}
 
// Do not edit below this line
module.exports = removeFromArray;
