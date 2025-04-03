//method 1
const sumAll = function(start, end) {
    if(start > end) {
        [start,end] = [end,start];
    }
    if(start < 0 || end < 0) {
        return 'ERROR'
    }
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR'
    } 
    if(isNaN(start) || isNaN(end)) {
        return 'ERROR'
    }
    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i
    }
    return sum
};
console.log(sumAll(1,4));

/*
//method 2 Arithmetic progression = n/2(a + l)
const sumThru = function(firstNum, secondNum) {
    let numOfTerms = secondNum - firstNum + 1;
    sumThru = numOfTerms * (firstNum + secondNum)/2;
    return Math.abs(sumThru);
    
};
console.log(sumThru(123,1))

const sumNum = function(a, l) {
    let summation = 0;
    for(i = a; i <= l; i++) {
        summation += i
    }
    return summation
}
console.log(sum(1,7));
*/

// Do not edit below this line
module.exports = sumAll;
