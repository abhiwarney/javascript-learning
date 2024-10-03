//Class is just a sugar syntax over the js new keyword and constructor function just to help oops paradigm vased dev to understand js more, it was introduced in EC^6 standard

//define a class

class User{
    constructor(username,email,password){ //this is constructor , its optional
        this.username = this.changeUsername(username)
        this.email = email
        this.password = this.encryptPassword(password)
    }

    //add methods

    encryptPassword(password){
        return `${password}!@ab123`
    }

    changeUsername(username){
        return `${username.toUpperCase()}`
    }
}

const newUser = new User("abhinav","abc@gmail.com","setme")

console.log(newUser);


//now this is just a wrapper, lets see same functionality behind the scene using traditional approach

function createUser(username,email,password){
    this.username = this.changeUsername(username)
    this.password = this.encryptPassword(password)
    this.email = email
}

createUser.prototype.encryptPassword = function(password){
    return `${password}!@ab123`
}

createUser.prototype.changeUsername = function(username){
    return `${username.toUpperCase()}`
}
const user = new createUser("hena","hena@gh.com","gfpass")

console.log(user);
