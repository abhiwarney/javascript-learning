//reduce() is also similar to reduce() function in streams in java, it reduces the collection to a single result, 
//it accepts a callback , with two arguments , one is accumulator, other is the item in the collection

const nums = [1,2,3]

const sumOfNums = nums.reduce((accumulator,num) => accumulator + num) //kindly focus her, we passed an accumulator and num as argument in the callback,
//accumulator will store the result of the operator and again passed as argument to the callback in next iteration and in the end returns the accumulator value
//this reduce() is use to perform accumulation task on the collection, like sum of items, products of items etc.

console.log("result : ",sumOfNums);
//output ->  result :  6

//now in above we haven't provided initial value to the accumulator, so it took 0 by default, lets give a diff iniitial value to the accumulator and see the result

const sumAgain = nums.reduce( ((acc, curValue) => acc + curValue),1)// basically reduce is overloaded fucntion, it can take initial value as argument in one function

console.log("result with initial Value :" , sumAgain); //output ->  result with initial Value : 7
