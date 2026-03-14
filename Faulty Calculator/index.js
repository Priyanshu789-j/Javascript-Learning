/* Create a faulty calculator

+ ----> -
* ----> +
- ----> /
/ ----> **   
10% of the time performs wrong operations
*/
let random = Math.random()
let a = prompt("enter first number")
let c = prompt("enter operation")
let b = prompt("enter second number")

let obj = {
  "+":"-",
  "*":"+",
  "-":"/",
  "/":"**",
}

console.log(random)
if (random > 0.1){
  //perform correct calculation
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
  //perform the wrong calculation
  c = obj[c]
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}