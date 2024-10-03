//getter and setters in js class


class User{
    constructor(username,password){
        this.username = username
        this.password = password
    }

    //if we declare getter than setter becomes mandatory, if we dont specify any, by default class creates its getter and setters
    //TypeError: Cannot set property username of #<User> which has only a getter(this error comes)
    get username(){
        return `${this._username}|abc` //note the underscore added before the property, just to distinguish it from constructor, use can use any name, keyword
    }

    set username(value){
        this._username = value
    }

    get password(){
        return this._pasword
    }


    set password(value){
        this._pasword = value
    }

    /* 
    WE HAVE TO MODIFY THE getter setter to avoid this error
    --------------------------------------------------------------
    return `${this.username}|abc`
                       ^
    RangeError: Maximum call stack size exceeded
    --------------------------------------------------------------
    */
}

const user = new User("abhinav","wer123")

console.log(user.password)


//------------------------------------------------------------------------
//Now the above is current way of writing get and set, lets see how traditionally it was done back then

function Car(brand,range){
    this._brand = brand
    this._range = range

    Object.defineProperty(this,'brand',{
        get : function(){return this._brand.toUpperCase()},
        set : function(value){ this._brand = value}
    })

    Object.defineProperty(this,'range',{
        get : function(){return this._range},
        set : function(value){ this._range = value}
    })
}

const car= new Car("Mahindra",900)

console.log("brand:",car.brand);
console.log("range",car.range);


//----------------------------------------------------------------
//lets make get set using raw literal object

const Shape={
    _size : 10,

    get size(){
        return `${this._size}alpha`
    },

    set  size(value){
        this._size =  value
    }
}

const shape = Object.create(Shape)

console.log(shape.size)

