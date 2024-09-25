const obj = new Object({"h" : 4,"g" : 5}) //created singleton object 
//console.log(obj);

const obj1 = {} //created literal object

obj1.id = 1
obj1.skill = ["java","Js"]
obj1.email = "abhiwarney@gmail.com"
obj1.name = {
    fullName : {
        firstName : "ABhinav",
        lastName : "Warney"
    }
}

//console.log(obj1)

const obj2 = {1: 'a', 2 : 'b'}
const obj3 = {3 : 'c' , 4 : 'd'}

//to combine two objects
const obj4 = {obj2,obj3}
//console.log(obj4) 
/* out put is not expected of above code:
    { obj2: { '1': 'a', '2': 'b' }, obj3: { '3': 'c', '4': 'd' } }
*/
//using assign() function of object 

const obj5 = Object.assign({},obj2,obj3)
//console.log(obj5); //output : -> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } (this is expected outptut)
/*note
in above code 'Object.assign({},obj2,obj3)' here '{}' is specified as target object where the accumulation is done and returned, if
we donot provide then still the new object will have the same output but the accumulation will happen at obj2 object and will reflect in obj2,
so by this way we are manipulating the source object which is not a good practise in real time scenarios 
let do that to demonstrate here , find example in below code

the output of below code is :
-----------------------------------------------
before operation 
obj2 :  { '1': 'a', '2': 'b' } 
and 
obj3 :  { '3': 'c', '4': 'd' }
result object obj6 :  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
after assign operation 
obj2 :  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }     //(see here in this line obj2 is modified) as this was considered target for the operation
and 
obj3 :  { '3': 'c', '4': 'd' }
---------------------------------------------------
*/
// console.log("before operation \nobj2 : ",obj2,"\nand \nobj3 : ",obj3);
 const obj6 = Object.assign(obj2,obj3)
// console.log("result object obj6 : ", obj6)
// console.log("after assign operation \nobj2 : ",obj2,"\nand \nobj3 : ",obj3);

// The above methods are rarely used for combining objects, instead we used spread() to combines 90% of the time
const obj7 = {...obj2,...obj3} //this simply returns new object
//console.log(obj7)

//varipuse function available
// console.log(Object.keys(obj2))// results in array of all the keys inside obj  | output: [ '1', '2' ]
// console.log(Object.values(obj2)) // results in array of values | outptut : [ 'a', 'b' ]
// console.log(Object.entries(obj2)) // results in key value pair inside array of array | output : [ [ '1', 'a' ], [ '2', 'b' ] ]
// console.log(obj1.hasOwnProperty("idf")) //check if property is present in the object
// console.log(obj1.name?.fullName.firstName) //?. (optional chaining) is used if prpeerty is undefined or null then return undefined instead of throwing error

// oBject destructring in javascript
//destructuring is used when we have to access properties from an object without having to write biler code

const sampelObj = {
    name: "abhinav",
    age : 26,
    email: "abhiwarney@gmail.com"
}

const {email} = sampelObj //her{email} is directly used instead of writing 'email = sampleObj.email'
console.log(email)
//use can add aliad as well
const {name : userName} = sampelObj
//this is usefull when requesting apis and , then destructing the json object
//To-Do explore this destructing more 
console.log(userName)