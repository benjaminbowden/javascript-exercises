const sumAll = function(num1, num2) {
    let total = 0;
    let bigger = num2;
    let smaller = num1;

if (num1 > num2){
    bigger = num1;
    smaller = num2;
}
while (smaller <= bigger){
    total = total + smaller;
    smaller += 1;
}
    return total;

};

// Do not edit below this line
module.exports = sumAll;
