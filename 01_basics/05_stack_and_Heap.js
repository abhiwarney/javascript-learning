//all the primitive data-types are stored in stack memory, 
//and are called by value, where as all the reference(non-primitive types) are stored in Heap memory and called by refernce just like Java

//primitive : number, string, boolean, null, undefined
//reference types : Object, Array, Functions


//------------------------------passing-a-copy-of-value----------------
let a = 54
let b = a
b = 67//here change is not reflected in both variables as only a copy of the value is passed

console.log("a=",a,"b=",b)

//----------------------------passing-refernce-of-the-value-----------------
let emp1 = {
    name : "abhi",
    email : "abhi66@gmail.com"
}

let emp2 = emp1

emp2.email = "abhiChangedEmail.com" //here the change is reflected in both the object

console.log(emp1,emp2)

