// function getData(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455)
//     },1000);
//   })
// }
// console.log("loading modules")

// console.log("do something else")

// console.log("load data")
// let data = getData()

// console.log(data)

// console.log("process data")
// console.log("task2")

// data.then((v) => {
//   console.log(data)

// console.log("process data")
// console.log("task2")

// })


// as the asynchronus nature of js , the promise will exxecute in its time of 10 sec
// but else all thing will exectcute before or after promise function before the promise time.

// we use then to wait for the promise function but 
// using async/await, JS will wait for the promise to finish before moving to the next line.
//it makes asynchronous code look synchronous (line by line)

//async function always return a promise and await wait for the next.
// await pause the function  until the promise is resolved.

// async function getData() { 
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455)
//     }, 3500);
//   })
// }

//fetch does not giva data directly it give promise 
async function getData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await response.json()
  return data
}

async function main() {
  console.log("loading modules")
  console.log("do something else")
  console.log("load data")

  let data = await getData()
  console.log(data)

  console.log("process data")
  console.log("task2")
}

main()