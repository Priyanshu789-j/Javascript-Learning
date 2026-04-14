console.log('this is promises');

let checkEven = new Promise((resolve, reject) => {
  let number = 4;
  if (number % 2 === 0) resolve("The number is even!");
  else reject("The number is odd!");
});
checkEven
  .then((a) => console.log(a)) // On success
  .catch((err) => console.error(err)); // On failure