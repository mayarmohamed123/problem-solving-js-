// Description:
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.
// function stringy(size) {
//   return Array(size)
//     .fill(0)
//     .map((x, i) => (i % 2 === 0 ? (x = 1) : (x = 0)))
//     .join("");
// }

// Another solution

function stringy(size) {
  let str = "";
  for (let i = 1; i <= size; i++) {
    i % 2 === 0 ? (str += "0") : (str += "1");
  }

  return str;
}
console.log(stringy(2));
