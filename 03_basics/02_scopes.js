//block scope

if(true){
    let a = 40
    const b = 10
    var c = 30
}

//console.log("outer a :",a) //not accessible -> error not defined
//console.log("outer b :",b)//not accessible -> error not defined
//console.log("outer c :",c)//accesible -> outer c : 30 therfore var is not used in js as it doesnot respect the scope


//global scope

let g = 40
let h = 10
if(true){
    let g = 50
    h = 60
    //console.log("inner 'g' : ",g) //this scope will have its own copy of g
   // console.log("inner h : ", h) //this h will have access to global h and will modify the value
}

// console.log("outer g : ",g)
// console.log("outer h :",h)

//scope in functions

function one() {
    const username = "abhinav"

    function two(){
        const age = 26
        //console.log("[two] username :", username); //accessign var from outer function -> success o/t two] username : abhinav
        
    }
    //console.log("[one] age: " , age); //accessing variable from inner function -> error age is not defined
    
    two()
}

one()

//scope in if block

if(true){
    const firstName = "Abhinav"
    if(firstName === "Abhinav"){
        const lastName = " Warney"

        //console.log("[innner]",firstName+lastName) //output ->  [innner] Abhinav Warney
    }

   // console.log("[outer]",lastName) //error -> ReferenceError: lastName is not defined
}

//we can declare functions and assign them to variable aswell and conspet of mini hoisting

const myVar = function(name){
    return `${name} welcome to js`
}

console.log(myVar("abhinav")) //abhinav welcome to js
/*
point to note is in this way of declarinf vars and assign values through functions you can access variable
 before assign value to it and this is calle hoisting in js, but this is not the case with other way of declaring fucntions,
 you can call them before its declarartion
To-Do :  explore hoisting in Javascript further
*/


