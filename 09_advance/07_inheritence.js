//inheritance syntac is almost same like java

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`LOGGING USERNAME : ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) //calling construcutor of super/parent class and passing the args
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course is added to user : ${this.username}`);
    }
}

const teacher = new Teacher("shimu","adafd@gmai.com","ffff45")

console.log(teacher);

/* 

Teacher {
  username: 'shimu',
  email: 'adafd@gmai.com',
  password: 'ffff45'
}
  
*/

teacher.addCourse()
teacher.logMe()

/* 
output:

A new Course is added to user : shimu
LOGGING USERNAME : shimu

*/