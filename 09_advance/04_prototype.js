/* 
In java script, everything is prototype based, every thing in java script is an object and it has prototype.
every object inherites the protype of Object type
In js we have inheritance of prototype
ToDo:
this concept is not crystal clear, explore it further
*/

//how to add properties in object

const aUser = {
    name:"defaul",
    age : 34
}
aUser.email = "abc@gm.com"

//console.log(aUser);

let aString = "Abhinav    "

console.log(aString.length);//now i want to find length without spaces so i want to insert a new function in prtotype of string to find trueLength


String.prototype.trueLength = function(){ //adding a trueLength function to protype
    return this.trim().length
}
console.log("truelength is :",aString.trueLength())

//we can add a protype in the base Object , and i will reflect in all the child objects


//inheritence at prototype level

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  //old way of doing inheritance
}

Teacher.__proto__ = User

//new way of using functions to set proto

Object.setPrototypeOf(TASupport,Teacher)

