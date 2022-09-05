import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector("form");
const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notANumber(weight) || notANumber(height)

  if(showAlertError){
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
} 

function notANumber(value) {
  return isNaN(value) || value == ""
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}