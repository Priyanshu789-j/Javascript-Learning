//let a = [1,56,45,44,34]

// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element)
  
// }
// a.forEach((value,index,arr)=>{
//   console.log(value,index,arr)
// })

// let object = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// for (const key in object) {
//   if (!Object.hasOwn(object, key)) continue; //for in
//   const element = object[key];
//   console.log(key,element) 
// }

// for (const element of a) {
//   console.log(element)    //for of
// }

// map()
// let arr = [1,13,5,7,8,11]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element**2)  
// }
// console.log(newArr)

//alternate we can do this by map()
let arr = [1,13,5,7,8,11]
let newArr = arr.map((e)=>{
  return e**2
})
console.log(newArr)

const greaterThanSeven = (e)=>{
  if(e>7){
    return true
  }
  return false
}
console.log(arr.filter(greaterThanSeven))