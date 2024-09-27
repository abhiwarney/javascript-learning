/*to understand arrow func, we need to understand 'this' keyword, as compared with java , 
where this refers to current object, similarly 'this' in js refers to current context, 
in case of object the context is current object and in case of global th econtext is emtpy in case of node, bun etc,
but in case of browser js engine , this in global context return the windows object
*/

//object
const anyObject = {
    name: "abhi",
    age : 26,
    greetings : function(){ console.log(`${this.name} welcome to Arrows concept`)} // her 'this' is refering to current object
}

//anyObject.greetings() // output - > abhi welcome to Arrows concept

//but lets try this with global context, what shouold be th output in case of node

//console.log(this) //this return {} an empty object, but if do the same thing in browser it will return the window global object, and this the major diff


//lets try this in funcitons

function aFunc(){
    const a = "hello"
    //console.log(this) // this will return below long code *exmaple = 01
    //console.log(this.a) //this will return 'undefined'
}

aFunc() 
/*
(exmaple =01)
---------------------------
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/

//lets try with another style of funciton declaartion

const myFunct = function(){
    const a = "hello "
    //console.log(this) //this will also return output *example =01
    //console.log(this.a) //return undefined
}

myFunct()



//lets talk about arrow function, its nothing but lambda expression in js, 

const aFunction = () => {
    const a = "hello"
    //console.log(this) //in arrows style , this will only return an empty object, output -> {}
    //console.log(this.a) //ouptu 'undefined'
} 
aFunction()

//so basically this function return an empty object in case of arrow funcitons

//now lets try to explore arrow function in js, this almost similar to lambda expression in java

const anArrowFunciton = (a,b) => a + b // return stament is not needed when there is only one line, but if yoy specify {} then return stament becomes mandatory
console.log(anArrowFunciton(3,4))

//now lets try to return an object using arrow

const returObjectFunc = () => ({name: "abhinav"}) //remember this syntax , as this will be helpul in react 
console.log(returObjectFunc()) //ouput undefined

// the problem here is {name : "abhinav"} should be enclose in a parenthesis '()' or enclose them { return { name : "abhinav"}} in this way