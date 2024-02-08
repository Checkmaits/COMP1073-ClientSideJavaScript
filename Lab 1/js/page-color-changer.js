// Get all the sliders elements
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Add event listeners to the sliders
redSlider.addEventListener("input", changeColor);
greenSlider.addEventListener("input", changeColor);
blueSlider.addEventListener("input", changeColor);

// Function to handle the color change
function changeColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  const outputText = document.getElementById("output-text");
  outputText.innerHTML = `CURRENT COLOR: rgb(${red}, ${green}, ${blue})`;

  const body = document.querySelector("body");
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Call the function to change the color
// This is just to set the initial color
changeColor();
