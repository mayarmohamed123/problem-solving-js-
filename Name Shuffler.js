// Description:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"
function nameShuffler(str) {
  let names = str.split(" ");
  return names[1] + " " + names[0];
}
