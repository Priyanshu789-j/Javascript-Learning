console.log("priyanshu")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "pink" //changes color acording the index mention 
// document.getElementById("pink").style.backgroundColor = "red" // changes color according the id
// 'do'cument.querySelector(".box").style.backgroundColor = "#25eb0a" it will change only the first box of .box
document.querySelectorAll(".box").forEach(e =>{
  e.style.backgroundColor = "#25eb0a" //It will  change the color of all boxes
})
