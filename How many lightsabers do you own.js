// Description:
// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name = "mayar") {
  return name == "zZach" ? 18 : 0;
}
console.log(howManyLightsabersDoYouOwn());
console.log(howManyLightsabersDoYouOwn("Zach"));
console.log(howManyLightsabersDoYouOwn("mayar"));
