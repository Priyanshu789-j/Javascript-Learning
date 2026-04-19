let input = document.getElementById("display");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("tasklist");


addBtn.addEventListener("click", () => {
  let task = input.value;
  if (task === "") return;

  let li = document.createElement("li")
  let span = document.createElement("span")
  span.textContent = task;


  let btn1 = document.createElement("button")
  btn1.textContent = "✅";
  btn1.addEventListener("click", () => {
    li.style.color = "green";
  })

  let btn2 = document.createElement("button")
  btn2.textContent = "❌";
  btn2.addEventListener("click", () => {
    li.style.color = "red";
  })
  li.appendChild(span)
  li.appendChild(btn1)
  li.appendChild(btn2)

  taskList.appendChild(li)

  input.value = ""


})