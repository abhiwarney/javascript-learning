//truthy and falsey values in javascript are the values which are evaluated as truth or false by default by the js engine,

//falsey values in js are

/*
1. false
2. 0 or -0
3. 0n -> BigInt
4. "" -> empty string
5. null
6. undefined
7. NaN
*/

//example

if ("") {
  console.log(`"" is truthy value`);
} else console.log(`"" is falsey value`);

//rest all other values are considered true, an empty array [] is also a truthy value

//examplle

if ([]) {
  console.log("array is truthy");
} else console.log("not truthy");
