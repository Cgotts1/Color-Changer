let box = document.querySelector(".square-container")

// let box = document.querySelectorAll(".square-container")
// box.forEach(clickBox)
// clickBox(box)

box.addEventListener("click", clickBox)

function clickBox(){

    let randomColor = ("rgb(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");

    box.style.backgroundColor = randomColor;
}