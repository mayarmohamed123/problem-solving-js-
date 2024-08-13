// Description:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
 return numbers.reduce((a, b) => a + b*b , 0);
}
console.log(squareSum([2,3,4]));