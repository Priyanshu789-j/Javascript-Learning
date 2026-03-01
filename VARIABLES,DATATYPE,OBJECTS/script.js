console.log('hey i am priyanshu') 

var a = 4; // var  can be change
var b = 5;
var c = "harry";
console.log(a+b)
console.log(typeof a ,typeof b,typeof c)

//const a1 = 4;
//a1 = a1 + 1; //this a can not be change as it is constant
// var is globally scope and let is blockscope
//we will use let over var 

let x = "priyanshu";
let y = 23;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
//typeof null is object 

//OBJECT in js is key value pair like dictionary in python 
// ex - name : "priya"
      // age : "20"
let o = {
  "name":"harry",
  "job role":"manager",
  "is_hansome":true
  
} 
console.log(o) 
o.salary = "100crores"   
console.log(o) 