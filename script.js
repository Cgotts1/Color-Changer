let box = document.querySelectorAll(".square-container")          //queryselector all is an array therefore you need a forloop


// querySelector of the box clicked
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", clickBox)
}


function clickBox() {

    let randomColor = ("rgb(" + Math.floor(Math.random() * 255)
        + "," + Math.floor(Math.random() * 255) + ","
        + Math.floor(Math.random() * 255) + ")");

    this.style.backgroundColor = randomColor;
}




