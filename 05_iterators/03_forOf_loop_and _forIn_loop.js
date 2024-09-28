//forOf and forIN loops are basically same as enhaced for loop in java, with minor differences

//forOf loop cannot iterate over objects, but can iterate over arrays and maps
//ForIn loop can iterate over objects, arrays, but not map

//----------------------------forOf-loop-----------------------//

//forOf loop
const arr = [1, 2, 3, 4, 5, 6];

//works on arrays
for (const item of arr) {
  //console.log(item);
}

//lets try it on map
const map = new Map();

map.set("js", "javascript");
map.set("py", "python");
map.set("cpp", "c++");

for (const key of map) {
  // console.log(key);
}
/*
--------------output-----------------------
[ 'js', 'javascript' ]
[ 'py', 'python' ]
[ 'cpp', 'c++' ]
 -------------------------------------------
 we we dont want this output, lets try something else with destructring array
*/

for (const [key, value] of map) {
  //console.log(`${key} : ${value}`);
}
/*
--------------------output------------------
js : javascript
py : python
cpp : c++
-------------------------------------------

this way we can access key and values individually of map
*/

//let try forOf with an object

const anObject = {
  js: "javascript",
  cpp: "c++",
  py: "python",
};

// for (const key of anObject) {
//    console.log(key);
// }
/*
------------------------output-------------------
TypeError: anObject is not iterable
-------------------------------------------------

so we can conculde that forOf can not iterate over an object
*/

//--------------------------------forIn-loop-----------------------------------------------

//lets try all the scenarios with forIn loop

//with an array
const myArr = ["hello", "abhinav", "this", "is", "forIn", "loop"];

for (const item in myArr) {
  // console.log(item);
}
/*
--------------------output--------------------------
0
1
2
3
4
5
--------------------------------------------------------
so we can see it has printed the index, but we want values as well
*/
for (const key in myArr) {
  //console.log(`${key} : ${myArr[key]}`);
}
/*
---------------------------output--------------------------
0 : hello
1 : abhinav
2 : this
3 : is
4 : forIn
5 : loop
--------------------------------------------------------
so, this way we can access the values as well
*/

//lets try with an object

const ranObj = {
  in: "India",
  us: "USA",
  sp: "spain",
};

for (const key in ranObj) {
  // console.log(`${key} : ${ranObj[key]}`);
}
/*
--------------------------output--------------------------
in : India
us : USA
sp : spain
-----------------------------------------------------
so we can use it with object as well
*/

//lets try forIn with map

const newMap = new Map();

newMap.set("in", "india");
newMap.set("us", "USA");
newMap.set("sp", "Spain");

for (const key in newMap) {
  console.log(key);
}
/*
----------------------output------------
there is no output, and error as well
--------------------------------------------
so we can say that map is not iterable usi forIn loop
*/
