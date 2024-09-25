//Arrays
const myArr = [0,1,2,3,4,5,6]
const anotherArray = new Array("ada","342",3535,{"sd":"sf"},true)

console.log(myArr);
console.log(anotherArray);

//to add element at end
myArr.push(7)
console.log("push 7 : ",myArr);
// delete element at end
myArr.pop(7)
console.log("pop 7 : ",myArr);


//to add element from begining
myArr.unshift(9)
console.log("unshift 9 : ",myArr);
// delete element at end
myArr.shift(9)
console.log("shift 9 : ",myArr);

console.log("include 4 in arr? :" ,myArr.includes(4));
console.log("indexOf(3) : ",myArr.indexOf(3));
console.log("join('-') : " ,myArr.join('-'));
console.log("sort in descending : " , myArr.sort((a,b) => b - a ));
let newArr = [1,2,4,[5,6,7],8,9]
console.log("before flat() : " , newArr)
console.log("after flat() : " , newArr.flat())


//slice and splice function
console.log("before slice() : ",myArr)
console.log("slice(1,3) output : ",myArr.slice(1,3));
console.log("after slice() : ",myArr)

console.log("before splice() : ",myArr)
console.log("splice(1,3) output : ",myArr.splice(1,3))
console.log("after splice() : ",myArr)
