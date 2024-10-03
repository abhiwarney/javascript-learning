//refer mdn for more information as concept is not clear


//to create promise

const promise1 = new Promise(function (resolve, reject) {
    console.log("[promise 1] inside promise1 creation")
    resolve("hello brother") //this function is necessary otherwise this promised cannot be consumed
    //resolve(<data>) is for onFullfilled
    //reject(<dat>) is for onrejected
})

//consuming promise  using .then(<resolve() data sent is passed here>)

promise1.then(function (response) {
    console.log("[promise 1] promise1 consumed:", response)
})

//now lets add rejection part and in that case , how to handle it in consume phase using catch()

const promise2 = new Promise(function (resolve, reject) {
    const error = true

    if (error) {
        console.log("[promise 2] inside rejection block in promise2");

        reject("Error occured!!")
    } else {
        resolve({ username: "abhinav", email: "abhi@gmail.com" })
    }
})
//now we can see the promise is going fo rrejection phase so node will ask you to handle the unhandledPromise rejection by exception :->  new UnhandledPromiseRejection(reason); code: 'ERR_UNHANDLED_REJECTION'
//so now we will handle it using catch()
promise2.then(function (response) {
    console.log("[promise 2] consume promise2 :", response);

}).catch(function (error) {
    console.log("[promise 2] rejection promise2 message:", error);

})

//note you can see that the execution is not in sync as per the code, this is because of node event loop, explore this further to get more claarity

//chaining of then() is possible, and using finally() to execute not matter is promise is resolved or rejected this is always executed

const promise3 = new Promise(function (resolve, reject) {
    console.log("[promise 3] inside promise 3 creation");

    resolve({ username: "abhinav", email: "abc@g.com" })
})

promise3
    .then(function (response) {
        console.log("[promise 3] response:", response)
        return response.username //a promise returns something , and to process that , we can chain it using then
    })
    .then(function (data) {
        console.log("[promise 3] chaining then() data :", data);
    })
    .catch((error) => console.log("error:", error))
    .finally(function () {
        console.log("[promise 3] this is finally, and is always executed!!!")
    })

//using async await to consume promise, but there we have to use try catch block to handle rejections, this is also used but the previous approach is less boiler plate

const promise4 = new Promise(function (resolve, reject) {
    const error = false

    if (error) {
        console.log("[promise 4] inside rejection block in promise 4");

        reject("Error occured!!")
    } else {
        resolve({ username: "abhinav", email: "abhi@gmail.com" })
    }
})

//console.log("promise4 :",promise4)
/* 
how a promise object look like,
ouput->

promise4 : Promise { 
                        { 
                        username: 'abhinav', 
                        email: 'abhi@gmail.com' 
                        } 
                    }
*/
//-----------------------async-await-------------------------
async function consumePromise4() {
    try {
        const response = await promise4
        console.log("[promise 4] consume:", response)
    } catch (error) {
        console.log("[promise 4] E:", error);
    }
}

consumePromise4()


//-------------------------------FETCH-API-------------------------
/* 
 so in node js fetch api is interoduced around 2022, and really replace traditional xmlHttpRequest
  thing and made live of js developer really easy

  this api is used to fetch the api response based on the parameters passed, like url, method and body etc.
  and return a promise<response>
  and consumed like all other promises we discussed above
  explore fetch() api further on mdn docs

  fetch() has its own prority quee, and therefore its executed before any other task in the task quee
  lets do it in code
*/
let responseG;
fetch("https://api.github.com/users/abhiwarney",{
    method: 'GET'
})
.then((response) => {
    console.log("fetch() response :",response)
    responseG = response
    return response.body
})
.then((data) => console.log("data",data.getReader()) //here we need to decode the stream, will explore it later
)
.catch((error)=>console.log("fetch error:",error))
.finally(()=> console.log("fetch() finally:","this is fetch finally call!!!"))


