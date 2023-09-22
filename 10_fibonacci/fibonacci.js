const fibonacci = function (num) {
    //must be positive number and can accept strings that are numbers
    //F(0) = 0; F(1) = 1; 
    //F(n) = F(n-1) + F(n-2) for n>1
    // A series of numbers in which each number ( Fibonacci number ) 
    //is the sum of the two preceding numbers. 
    //The simplest is the series 1, 1, 2, 3, 5, 8, 13, 
    //fibonacci(6) // returns 8
    //fibonacci(4) // returns 3 

    let checkedNum = parseInt(num);
    let f1 = 0
    let f2 = 1
    let total = 0

    total = 0
    if (checkedNum === NaN | checkedNum < 0) {
        return "OOPS"
    } else if (checkedNum == 0) {
        return 0;
    } else if (checkedNum == 1) {
        return 1;
    } else {
        for (let i = 1; i < checkedNum; i++) {
            const temp = f2;
            f2 = f1 + f2;
            f1 = temp;
            
        }
        return f2;
    }

}

fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
