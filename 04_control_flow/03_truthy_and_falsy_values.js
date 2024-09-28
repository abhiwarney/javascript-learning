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
/*
"0",[]," ",'false',{},function(){}
*/
//examplle

if ([]) {
  console.log("array is truthy");
} else console.log("not truthy");

//now we know [] is evaluated as true, then how will you check if array is empty, refer below example

const arr = [];

if (arr.length === 0) console.log("array is empty");

//similary for an object {}

const anObject = {};

if (Object.keys(anObject).length === 0)
  console.log("object is an empty object");

//Nullish Coalescing operator '??' : null, undefined

//this operator is used to do a safety check on null and undefined values to prevent our code to break

let value = 45

let result = value ?? 0

console.log(result);

value  = null
result  = value ?? "we got null"
 console.log(result);

value  = undefined
result = value ?? "we got undefined"

console.log(result);
// we can do chaining as well

const value1 = null
const value2 = undefined

const evaluation = value1 ?? value2 ?? 12
 
console.log(evaluation);

 