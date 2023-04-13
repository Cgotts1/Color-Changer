// Get the container element
var container = document.getElementById("button-container");

// Create 100 buttons with incrementing names
for (var i = 1; i <= 100; i++) {
  // Create a new button element
  var button = document.createElement("button");

  // Set the class name
  button.className = "square-container";

  // Set the button text with the incremented name
  button.innerHTML = "Square " + ("0" + i).slice(-2);

  // Add event listener for mouseenter to change color to a random color
  button.addEventListener("mouseenter", function () {
    var randomColor =
      "rgb(" +
      Math.floor(Math.random() * 250) +
      "," +
      Math.floor(Math.random() * 250) +
      "," +
      Math.floor(Math.random() * 250) +
      ")";
    //   this.style.backgroundColor = randomColor;
    // this works, its just so rare to land on a number that none of the boxes disappear
    if (randomColor === "rgb(2,2,1)") {
      this.style.display = "none";
    } else {
      this.style.backgroundColor = randomColor;
    }
  });

  // Add event listener for mouseleave to change color back to the default color
  // button.addEventListener("mouseleave", function () {
  //   //   this.style.backgroundColor = "#ccc";
  //   var randomColor =
  //     "rgb(" +
  //     Math.floor(Math.random() * 255) +
  //     "," +
  //     Math.floor(Math.random() * 255) +
  //     "," +
  //     Math.floor(Math.random() * 255) +
  //     ")";
  // //   this.style.backgroundColor = randomColor;

  // });

  // Append the button to the container
  container.appendChild(button);
}

let box = document.querySelectorAll(".square-container"); //queryselector all is an array therefore you need a forloop

// querySelector of the box clicked
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", clickBox);
}

function clickBox() {
  let randomColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  // let black = ("rgb(" + 1 + "," + 1 + "," + 1 + ")")
  this.style.backgroundColor = randomColor;
  // this.style.backgroundColor = black;
//   this.innerHTML = "Hi mom!";
}
