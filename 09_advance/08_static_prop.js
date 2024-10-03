//static is diff from java static keyword, the instance cant't acces the static members, but can be directly used using class name, somewhat similar to java
//u can make methods, block and fields sttaic in javascript


class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return 'a123'
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const user = new User("Warney")
const teacher = new Teacher("pintu","acaf@hh.com")

//console.log(user.createId()) //not accessible

//even teacher's object can't access the parents static method

//lets try direclty access statc method using class name

console.log(User.createId()) //we get the desired output

//lest see if we can acces usinf Teacher class name

console.log(Teacher.createId()) //yes, static members can be accessed using child class as well