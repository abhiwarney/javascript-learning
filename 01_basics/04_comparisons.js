//-------------------------------simple-------------------------
console.log( 3 > 2)
console.log( 3 == 4)
console.log(5 >= 6)

//---------------------confusing-------------------------------
console.log("\"2\" == 2 ","2" == 2) //true
console.log("\"02\" == 2","02" == 2) //true
console.log("\"2a\" == 2","2a" == 2) //false  because "2a" becomes NaN

//--------------------------------------strict-check-'==='----operator----------------------
//'===' this operator not only compares the value, nut also check the data-types

console.log("\"02\"===2","02"===2)//false, bcz "02" is string

 //------------------------------confusing-null--------------------
 console.log("null == 0",null == 0) //here '==' operator checks for equality and behaves diff as compared to '>,>=,<,<=' operator, though null is converted to '0' but still it fails becuase '==' check differently
 console.log("null > 0",null > 0)//false
 console.log("null >= 0", null >= 0)// true, bcz in comparison null is converted to 0 and then compared
 console.log("null < 0", null < 0)// false
 console.log("null <= 0", null <= 0)//true

 //--------------------------------confusing-undefined-comparison--------------------
 console.log("undefined == 0", undefined == 0)//false
 console.log("undefined > 0", undefined > 0)//false
 console.log("undefined >= 0", undefined >= 0)//false
 console.log("undefined < 0", undefined < 0)//false because undefined is converted to NaN, hence fails all the check

//----------------------------------confusing-boolean---------------------
console.log("true == 1", true == 1)//true
console.log("false == 0", false == 0)//true
console.log("true > 1" , true > 1)//false

//---------------------------------confusing-NaN---------------------------
console.log('NaN == 0',NaN == 0)//false
console.log("NaN >= 0", NaN >= 0)//false