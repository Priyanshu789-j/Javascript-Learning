console.log("this is strings")
let a = "harry"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// console.log(a[5]);

console.log(a.length)

let real_name = "pissu"
let friend = "chutiya"
console.log("his name is " + real_name + " and his freinds name is " + friend)
// now through template literals
console.log(`his name is ${real_name} and his friends name is ${friend}`)

let b = "Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())

console.log(b.slice(1,4)) //4th the index will not inculded sol= hiv
console.log(b.slice(1)) //all index from 1 

console.log(b.replace("Sh","7"))
console.log(b.concat(a))  //combines both a and b
console.log(b.concat(a,"aishwarya"))

//strings are imutable.