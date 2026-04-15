let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText; //Gets text inside button

    if(value ==="="){
      display.value = eval(display.value); //eval() converts string → calculation
    }else if (value ==="C"){
      display.value = ""
    }else {
      display.value += value;
    }
  })
})