//IIFE , Immediately Invoker Function Expression
/* 
So IIFE, is used to immediately invoke a function, without providing a calling statement explicilty,
 this is used to prevent the global vars to pullute the functions to get desired output or logic execution
*/

//this is called named iife
(function aFunc(){
    console.log(`Hello World`)
})();  
//take a note here, (<function>)(); , this syntax is similart to functionaName() , 
// the wokring is same, it is just that the function is immediately invoked
//key note: use of semicolon ; is required to tell the node to stop execution of iife function at ; otherwise if you write anothe IIFE after that bodey will raise an error


//we can write arrow function in iife as well
//this is called iife
(() => console.log("This is anothe iife expression"))();

//so basically we conclude that to write two iife we need to separate them using ;

//lets pass arguments in iife

((userName) => console.log(`welcome to console ${userName}`))("Abhinav"); //similar as normal function , just pass the arguments




