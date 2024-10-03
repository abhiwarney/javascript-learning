/* 
-------Lexical-scope---------------
Lexical scope is basically the ability of the inner function defined inside the outer function to access the properties of the outer function.
i.e. the inner function can access the outer function vars and method, but the the vice-versa is not true, and even the sibling functions of the 
inner function can't excess each others properties.

so this scope of inner function is called the lexical scope of the function
-----------------------------------
-------Closures--------------------
To understand closures lexical-scope understanding is required, closure basically enables the outer context to access the inner functionof the 
and outer function byt outer function returning the lexical scope of the inner function

this is usefull in case of react components, will discuss about its practical example using html

but first lets understand its fundamentals
-------------------------------------

*/

//Lexical scoping

function outer(){
    const name = "Abhinav"

    function inner(){
        const innerVar = "hello"
        console.log("inner function :", name) //inner func() can access outer function var
    }

    /* function innerTwo(){
        console.log("innerTwo :",innerVar); //ReferenceError: innerVar is not defined , so we can see inner func can't access sibling func vars aswell
        
    } */


    
    inner()
    //innerTwo()
}
//console.log(name); //ReferenceError: name is not defined, -------> not in the scope 

outer()

// so now we inderstood the lexical scope of the func, lets understand the closure

function parent(){
    const aVar = "common var"
    function child(){
        console.log("child :", aVar);  
    }

    return child // here we are returning the function definition, here closure comes in picture, it will not only send the inner functions context, but it will send the entire lexical scope of the inner function
}

const accessInnerFunc = parent()

accessInnerFunc() //in the output we can see child is executed and able to access aVar data as well, which show the outer function context is also available to it

//lets see closure in practical using html, refere <closureDemo.html>
