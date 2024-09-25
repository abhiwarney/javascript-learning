//------Date-and-Time-------------

const randomDate = new Date()
const customDate = new Date(2021,9,23,5,30)
const anotherRandomDate = Date.now()
console.log(randomDate)
console.log(customDate);
console.log(anotherRandomDate);

console.log(customDate.toLocaleDateString())
console.log(customDate.toDateString())
console.log(customDate.toISOString())
console.log(customDate.toJSON("key"));
console.log(customDate.toLocaleString());
console.log(customDate.toLocaleTimeString());
console.log(customDate.toString());
console.log(customDate.toTimeString());
console.log(customDate.toUTCString());
console.log(customDate.getMonth());
console.log(customDate.toLocaleString('default',{
    weekday : "long",
    month: "long",
    year: "numeric"
}))

//To-do : explore Date library from mdn and clear the clutter, also searcg about Temporal lib to be replacing Date object in future




