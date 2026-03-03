console.log("hello javascript ")
let a = 1;
for (let i = 0; i < 15; i++) { // for loop
  console.log(a+i);
} 
let obj = {
  name : "priyanshu ",
  role : "ceo",
  company : "dualix secure"

} 
for (const key in obj) {  // for in loop
  
  const element = obj[key];
  console.log(key,element)
} 

for (const c of "pissu") { //for of
  console.log(c)  
}

let i = 0;
while(i<6){
  console.log(i)
  i++;
}
let j = 10;
do {
  console.log(j)
  j++;
} while (j<6);

  

  
