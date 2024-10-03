/* 
In java script , it is protoype based language.
you can create objects, classes, functions here

it supports oops concepts, but there is no need of classes to create constructors or objects blueprint,
 thought it supports classes but it is not compulsory
*/

//object literal

const user ={
    username:"abhinav",
    level:"alpha",
    status:"active",
    id: 34,
    isLoggedIn: true,
    greetings: function(){
        console.log(`Welocme ${this.username}`);//this -> refers to current context        
    }
} //this is object literal

//console.log(user);
//user.greetings()

//console.log(this); //return current node context

//COnstructor functions

function User(name,age,status){ //this way a function is converted into class declaration, and is called constructuor function
    this.name = name,
    this.age = age,
    this.status = status

    this.greetings = function(){
        console.log(`this is constructoe greet ${this.name}`);
    }
    return this  
}

//const userOne = User("snacky",35,'active') //this is addinf properties to the current context rather than creating new instance and appends the properies to global object
//const userTwo = User("backy",36,"inActive")

//console.log(userOne); //this will show data of userTwo rather, because context is same fo both, now lets use new keyword to create new instances


const userThree = new User("sharma",34,'active')
const userFour = new User("Verma",23,'Inactive')

console.log(userThree); //now both have diff context
console.log(userFour);

/* 
output--------------------->

User {
  name: 'sharma',
  age: 34,
  status: 'active',
  greetings: [Function (anonymous)]
}
User {
  name: 'Verma',
  age: 23,
  status: 'Inactive',
  greetings: [Function (anonymous)]
}

*/
//-----------------instaceOf -operator used to find if object is an instance of the class  

console.log(userThree instanceof User); //output true
