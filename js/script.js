const form = document.querySelector("form");
const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value;
  const height = inputHeight.value;
} 