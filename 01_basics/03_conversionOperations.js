let aNumber = NaN //undefined|null

let stringNUmber = String(aNumber) //converting to string

console.table([stringNUmber,typeof stringNUmber]); 
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
