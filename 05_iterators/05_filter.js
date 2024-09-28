//filter is again used to filter the arrays based on a condition, it also accepts a callback as an  argument

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//now lets try with foreach first how to filter this array, point to note, for each doesn't return anything, where as filter returns an array

const newArr = [];

arr.forEach((item) => {
  if (item > 5) newArr.push(item);
});

console.log("using forEach : ", newArr); //output -> using forEach :  [ 6, 7, 8, 9, 10 ]

//so we saw that we can use forEach to filter as well, but it is bit complex needs boiler plate code like if else, statement and declaring array to store the filtered items

//to overcome this boiler plate , we have filter function, lets try it

const result = arr.filter((item) => item > 5);

console.log("using filter : ", result); //output -> using filter :  [ 6, 7, 8, 9, 10 ]
//so we can see how simple this filtering task has become

//now lets try it with array of objects

const books = [
  {
    name: "book1",
    genre: "fiction",
    publishYear: 1997,
  },
  {
    name: "book2",
    genre: "non-fiction",
    publishYear: 1989,
  },
  {
    name: "book3",
    genre: "science",
    publishYear: 1999,
  },
  {
    name: "book4",
    genre: "fiction",
    publishYear: 2000,
  },
  {
    name: "book5",
    genre: "non-fiction",
    publishYear: 2000,
  },
  {
    name: "book6",
    genre: "science",
    publishYear: 2001,
  },
  {
    name: "book7",
    genre: "fiction",
    publishYear: 2009,
  },
  {
    name: "book8",
    genre: "history",
    publishYear: 1997,
  },
]

const filterBooks1 = books.filter( (book) => book.genre === 'fiction' )

console.log("condition 1 : ",filterBooks1); 
/*
---------------------output------------------------
condition 1 :  [
  { name: 'book1', genre: 'fiction', publishYear: 1997 },
  { name: 'book4', genre: 'fiction', publishYear: 2000 },
  { name: 'book7', genre: 'fiction', publishYear: 2009 }
]
---------------------------------------------------------
*/

const filterBooks2 = books.filter( (book) => book.publishYear > 2000)

console.log("conditon 2 : " , filterBooks2);
/*
---------------------output------------------------
conditon 2 :  [
  { name: 'book6', genre: 'science', publishYear: 2001 },
  { name: 'book7', genre: 'fiction', publishYear: 2009 }
]
---------------------------------------------------------
*/

