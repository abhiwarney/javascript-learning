let aNumber = NaN //undefined|null

let stringNUmber = String(aNumber) //converting to string

//console.table([stringNUmber,typeof stringNUmber]); 
//if input = 33 , type string , value '33'
//if input = undefined , type is string , value 'undefined'
//input = true, type is string, value 'true'
//input = null , type string, value 'null'
//input = NaN , type string, value 'NaN'

let aString = "34"
let numberString = Number(aString)

//console.table([numberString,typeof numberString])

//input "343" , type 'number', value 343
//input "343df" , type 'number' , value NaN
//input undefined , type 'number' , value NaN
//input null, type 'number' , value 0
//input true, type 'number' , value 1

let aValue = NaN
let toBoolean = Boolean(aValue)

//console.table([toBoolean,typeof toBoolean])
//input = 1, output = true , type 'boolean'
//input = 0 , ouput = false , type  'boolean'
//input = "dafwef" output = true , type 'boolean'
//input = "" ouptut  = false, type 'boolean'
//input  = null , ouput = false, type 'boolean'
//input = undefined, output  = false, type 'boolean'
//input = NaN, output  = false, type 'boolean'

//----------------------------------------------------OPERATIONS---------------------------------------------------------
console.log(1+1)
console.log(2*2)
console.log(4/2)
console.log(3%2)
console.log(2**3)
let a  = 2
console.log("a++",a++)
console.log("++a :",++a)
console.log(1+"3")
console.log("1"+3)
console.log("1"+"1")
console.log(1+2+"3")//first add the numbers and then concat
console.log("1"+2+2) //consider first string and automatically converts the result to string
console.log(+true)//converts boolean to number
console.log(true+4)
console.log(true*4)
