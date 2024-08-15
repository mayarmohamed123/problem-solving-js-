// Description:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12
// const quarterOf = (month) => {
//   let first = [1, 2, 3];
//   let second = [4, 5, 6];
//   let third = [7, 8, 9];
//   let fouth = [10, 11, 12];
//   return first.includes(month)
//     ? 1
//     : second.includes(month)
//     ? 2
//     : third.includes(month)
//     ? 3
//     : 4;
// };

// Other solution
const quarterOf = (m) => Math.ceil(m / 3);

console.log(quarterOf(5));
