const inputId = document.getElementById('inputID')
const style = document.getElementById('style')

console.log(style)

function setCard () {
  const inputText = document.getElementById('inputID').value
  const card = document.getElementById(inputText)
  console.log(card)
  card.style.color = document.getElementById('style').value
}
