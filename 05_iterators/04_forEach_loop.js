// ---------------forEach-loop----------------//
//forEach loop is an inbuilt loop provided within an array, thus makes it easy to iterate over it ,
//used mostly, but u have to provide a callback fun as the arguments,
//to tell it what to do with the iterable value,i accepts 3 arguments, item,index,list of array

const arr = ["a", "b", "c", "d", "e", "f", "g"];

//arr.forEach((item) => console.log(item))
/*
--------------output----------------------
a
b
c
d
e
f
g
----------------------------------------
*/

// arr.forEach((item, index, list) =>
//   console.log(`${index} -> ${item} | list : ${list}`)
// );
/*
--------------------------output---------------------
0 -> a | list : a,b,c,d,e,f,g
1 -> b | list : a,b,c,d,e,f,g
2 -> c | list : a,b,c,d,e,f,g
3 -> d | list : a,b,c,d,e,f,g
4 -> e | list : a,b,c,d,e,f,g
5 -> f | list : a,b,c,d,e,f,g
6 -> g | list : a,b,c,d,e,f,g
---------------------------------------------------
*/

/**
 * now this forEach loop is very useful for web  apps, when an array of objects is sent to web page, it becomes easy to access each object
 * refer below example of an array of objects and accessing its values using forEach
 */

const shoesList = [
  {
    brand: "nike",
    cost: 2450,
  },
  {
    brand: "adidas",
    cost: 3550,
  },
  {
    brand: "skechers",
    cost: 5450,
  },
];

shoesList.forEach((item) => console.log(`[brand : ${item.brand} | cost : ${item.cost}]`))
/*
-------------------------output-----------------------------
[brand : nike | cost : 2450]
[brand : adidas | cost : 3550]
[brand : skechers | cost : 5450]
-----------------------------------------------------------
this was in web js we can extract the values dynamically
*/