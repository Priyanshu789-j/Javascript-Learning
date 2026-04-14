console.log("he is smart")
console.log("he is poor")

setTimeout(() => {
  console.log("i am inside")
},1);

console.log("the end ")
//as js has asynchronus actions so settimeout will print after the whole script is executed

//  A CALLBACK function is a function which passed as an argument into a  another function 
// to be executed at somepoint determined by the function
// scynchronus callback runs imeditately at the function call
// but it is mostly used for asynchronus callback to delay the call using timeout or more 

// when callback becomes nested deeply it create callback hell so we use PROMISE()