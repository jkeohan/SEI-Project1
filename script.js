// set the defualt word
const word = 'apple'
let wordLgth = word.length
console.log(wordLgth)
for(let i = 0; i < wordLgth; i++){
  let newElem = document.createElement("input")
  document.querySelector("body").appendChild(newElem)
}






// caputure the letter the user inputed
const button = document.querySelector('.button')
button.addEventListener('click',captureLetter)

function captureLetter(){
  let inpLetter = document.querySelector("#letter")
  console.log('this is the letter',inpLetter.value)
}
