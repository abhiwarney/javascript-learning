//----arrays-advance-funcs


const myArr = [1,2,[3,4,5],[6,[7,8,9]]]

//to flat the above array on one array as per specified depth use flat(<depth>), note : flat() returna new arrray
const flatResult =  myArr.flat(2) // u can specofy 'infenity' in depth in case depth is not known
//output flatResult : [    1, 2, 3, 4, 5, 6, 7, 8, 9  ]

//console.log("flatResult :",flatResult);

//concatenating 2 arrays....diff approach

//using push....output is not expected, changes to existing array
const arr1 = [1,2,3]
const arr2 = [4,5,6]

//arr1.push(arr2);

//console.log("push(arr2) : " , arr1) //output push(arr2) :  [ 1, 2, 3, [ 4, 5, 6 ] ]

//using concat function, return new array
const concatArr = arr1.concat(arr2);

//console.log("concatArr: ", concatArr) // output   concatArr:  [ 1, 2, 3, 4, 5, 6 ]

//another method commonly used is spread operator '...'
const spreadArray = [...arr1,...arr2] //useful when there are multiple arrays
console.log("spreadArray :",spreadArray)

//using Array lib

console.log(Array.isArray("ABHINAV"))
console.log(Array.from("ABHINAV"))
const a = 4, b= 5, c= 9;
console.log(Array.of(a,b,c,4))