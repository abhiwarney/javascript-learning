//map() is similar to map() in streams in java. it modifies the value in the array/collection and returns the new array

const nums = [1,2,3,4,5,6,7,8,9,10]

const result = nums.map((num) => num * 10)

console.log("result :", result);
/*
-------------------------output------------------------
result : [
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]
------------------------------------------------
*/

//we can do chaining as well

const newResult = nums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num > 40)

console.log("newResult :" , newResult);
/*
----------------------------output----------------------------
newResult : [
  41, 51,  61, 71,
  81, 91, 101
]
-----------------------------------------------------
*/
