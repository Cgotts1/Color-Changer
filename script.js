let box = document.querySelector(".square-container")


function clickBox(){

    let randomColor = ("rgb(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");

    box.style.backgroundColor = randomColor;
}

box.addEventListener("click", clickBox)