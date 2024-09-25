//numbers

const aNumber  = 345
const bNumber = new Number(346)
// console.log(aNumber)
// console.log(bNumber);

const cNumber = 123.8965
const dNumber = 1000000
// console.log(aNumber.toFixed(2))
// console.log(cNumber.toPrecision(4))
// console.log(cNumber.toString())
// console.log(dNumber.toLocaleString('en-In'))

// console.log(Number.MAX_VALUE) //inBuilt values of Number Object
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_VALUE) //ToDo: explore  more values


////-------------------------Math-library------------------------------

console.log(Math.abs(-4))
console.log(Math.max(3,4,6,8,5))
console.log(Math.round(3.4))
console.log(Math.ceil(3.1))
console.log(Math.floor(4.9));
console.log(Math.random())

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min))