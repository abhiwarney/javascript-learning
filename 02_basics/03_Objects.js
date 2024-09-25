//Object are declare as literals or through Constructor as Singleton

const obj1 = {"shin": "bin"} //this is literal way
const obj2  = new Object()//singleton Object


// console.log(obj1,obj2)

const sym1 = Symbol("abc3")
const ranObj = {
    name : "ABhinav",
    age: 26,
    "experience" : 3,
    email: "abhiwarney@gmail.com",
    [sym1] : "hello1" //added symbol use "[<symbol>]" to specify
}

// console.log(ranObj.name)
// console.log(ranObj["email"])
// console.log(ranObj[sym1])

//update object
ranObj.email = "abhiwarney@hotmail.com" //updating value of a key in object
//to freeze the object, so that modification is not allowed
// Object.freeze(ranObj)
// ranObj.email = "abhiwarney@yahoo.on" //this modification will not reflect as object is already freezed
//console.log(ranObj);

//added value as afunction in object

ranObj.greetings = function() {
    console.log("Hello Bhai Ji Kya hal chal")
}

//console.log(ranObj)
console.log(ranObj.greetings) // output: [Function (anonymous)]
console.log(ranObj.greetings()) 
/* outptut of above code:
Hello Bhai Ji Kya hal chal 
undefined
*/
