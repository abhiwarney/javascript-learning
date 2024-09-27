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

anyObject.greetings() // output - > abhi welcome to Arrows concept

//but lets try this with global context, what shouold be th output in case of node

console.log(this) //this return {} an empty object, but if do the same thing in browser it will return the window global object, and this the major diff

