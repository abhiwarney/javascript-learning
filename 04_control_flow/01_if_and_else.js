//a common if else statement just like other languages, nothing to explore, still writing an example encompassing all the diff ways if else is written

const isTrue = true;
const aNum = 5;

if (aNum === 7) {
  console.log("num is 5");
  //nested if
  if (isTrue) console.log("nested if");
} else if (4 === "4") {
  //this is if-else ladder
  console.log("invalid evaluation cant be true");
} else if (100 < 800) {
  console.log("100 is  < 800");
} else console.log("This is last else block");
