let box = document.querySelector("div")
// let body = document.querySelector("body")



let randomColor = ("rgb(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");



// let clickBox = ()=>{
//     box.style.backgroundColor = randomColor;
// }

// box.addEventListener("click", clickBox)

function clickBox(){
    box.style.backgroundColor = randomColor;
    // body.style.backgroundColor = randomColor;
}

box.addEventListener("click", clickBox)