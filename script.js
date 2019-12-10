// set the defualt word with letter spaces
const word = 'Grothusen'
let wordLgth = word.length
console.log(wordLgth)
for(let i = 0; i < wordLgth; i++){
  console.log(i)
    let elm = document.querySelector('.wordspaces')
    let newElem = document.createElement("input")

    let newSpace = document.createAttribute("letterspace")
    newSpace.value = i
    elm.appendChild(newElem).setAttributeNode(newSpace)
    document.querySelector(`[letterspace="${i}"]`).classList.add("letterbox")
      
}

// caputure the letter the user inputed
const button = document.querySelector('#inputbutton')
button.addEventListener('click',captureLetter)

let inpLetter = ""
function captureLetter(e){
 // console.log('this is the letter',inpLetter.value)
  console.log(e)
  inpLetter = document.querySelector("#letter").value
  console.log('input letter',inpLetter)
  console.log('word length',wordLgth)
  let count = 0
  for(let i = 0; i < wordLgth; i++){
    if(word.charAt(i) == inpLetter){
        console.log(`this letter ${i} equals the input letter`)
        document.querySelector(`[letterspace="${i}"]`).value = inpLetter
        //document.querySelector(`[data-letter=${e.key}]`)
        count = count + 1
    }
  }
  console.log(count)
  if(count > 0 ){
    alert('you found a match')
  }else{
    alert('the letter was not in the word, try again')
  }

  console.log(inpLetter)
  let z = document.querySelector(`#${inpLetter}`)
  z.style.textDecoration = "line-through"

  console.log(z.innerHTML)
  }



  

