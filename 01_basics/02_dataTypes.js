"use strict" //forces the engine to consider js to be of newer verison

let name= "abhinav" //string
let age = 16 //number
let isSkilled = true //boolean
let emp = {"name":"abhi","age":16,"skill" : "java"}
let bigIntExample = BigInt(42535364757588563334647586856985738573858333783758937957736985353)//used for storing bigINt value > 2^53
let bigIntSHortExample = 435464736374758574558585855n//'n' at the end automatically makes it a bigInt

//symbol
const id_01 = Symbol('123')
const id_02 = Symbol('123')

console.log("\nid_01 :",id_01,"id_02 :",id_02,"id_01 == id_02",id_01==id_02)

console.log(emp)
console.log(bigIntExample,"typeof :",typeof bigIntExample)
//bigint => for big integer values > 2^53
//undefined => a datatype
//null => a standalone value
//object  => also a datatype
//symbol => for unique values (helpful in react for unique components)

// console.log(typeof name) // to know th etype of the variable 'typeof'

// console.log(typeof undefined) // output is 'undefined' type
// console.log(typeof null) // output is 'object' type 
console.log(typeof emp)
