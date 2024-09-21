const empId = 23456
var empName = "abhinav"
let empContact = 3253536
empAddress = "abc ty 67"   //this way of declaring is not good practise
let empSkill; //you can decalre default variable (use of ';' is not mandatory in js)

console.log("before modifying");

//before modifying
console.table([empId,empName,empContact,empAddress,empSkill]) //to have table view of data use this syntax

empName = "Simran"
empContact = 23536474
empAddress = "newYork USA"


console.log("After Modfying");

console.table([empId,empName,empContact,empAddress,empSkill])

/*
never use 'var' keyword because of issues in  block scope and functional scope.
only use 'let' for variable and 'const' for constants.
*/

//empId = 654747 Note: we can change const variables i js. modifying would cause "TypeError: Assignment to constant variable."
//console.log(empId);
