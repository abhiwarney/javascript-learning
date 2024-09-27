//functions


//functions definition function <functionName>(<function params>) {<function body>}
function funcName(a,b){   
    console.log(`this is functions and a = ${a} b = ${b}`)
}

funcName("abhinav","warney")


function sum(num1,num2) {
    return num1 + num2
}
const result =  sum(3,5) //we assign result of functiona to variable

console.log("result",result);


//provide defualt values to params using  <functionName>(<paramName> = "<defaultValue>")
function loginUser(username ="Abhinav"){
    return `${username} logged successfully!!`
}

console.log("loginAttempt",loginUser()); //here no argument is provided

//lets try without having defualt value
function loginUser2(username){
    return `${username} logged in!`
}
console.log(loginUser2());  //output "undefined logged in!" -> so we can see js will make it undefined


//passing varArguments like java in funciton arguments using rest operator '...' operator it is also called spread operator but depends on tthe use cases
function randFunction(...nums){
    return nums //return an array of nums passed over args
}

console.log(randFunction(200,400,500,600,700))

//can also be written like this
function anotherFunc(value1, value2,...values){
    return value1 + value2 + " " + values
}

console.log(anotherFunc(100,200,300,700))

//passing objects in funcitons

const anObject ={
    name : "abhi",
    age : 26
}
function objectFunciton(objectP) {
    console.log(`this object has name : ${objectP.name} and age : ${objectP.age}`)
}

objectFunciton(anObject) // or u can directly pass an object in args like
objectFunciton({
    name:"shinds",
    age : 50
})

//lets pass arrays as arguments
function arrayacceptor(myArray){
    return myArray[1]
}

const anArr = ["firstELement index [0]","SecondElement index [1]"]

console.log("array demo:",arrayacceptor(anArr)) //or we can pass array directly in args like

console.log(arrayacceptor([0,1,2,43]))

console.log("random")