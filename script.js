// set the defualt word with letter spaces
const word = 'apple'
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

// caputure the letter the user inputed and provide the 
// the correct response on the screen
const button = document.querySelector('#inputbutton')
button.addEventListener('click',captureLetter)


let inpLetter = ""
let clickCount = 0
let correctCount = 0
let wrongCount = 1


function captureLetter(e){
  let correctCount = 0
 // console.log('this is the letter',inpLetter.value)
  console.log(e)
  inpLetter = document.querySelector("#letter").value
  console.log('input letter',inpLetter)
  console.log('word length',wordLgth)
  
  for(let i = 0; i < wordLgth; i++){
    if(word.charAt(i) === inpLetter){
        console.log(`this letter ${i} equals the input letter`)
        document.querySelector(`[letterspace="${i}"]`).value = inpLetter
            //document.querySelector(`[data-letter=${e.key}]`)
        correctCount += 1
            
    }
  }
    console.log(correctCount)
    if(correctCount > 0 ){
      alert('you found a match')
    }else{
      let color = document.querySelector(`[count="${wrongCount}"]`)
      color.style.backgroundColor = "black"
      console.log('this is the wrongCount',wrongCount)
      wrongCount += 1
      console.log('this is the wrongCount2',wrongCount)
      // if(wrongCount > 6){
      //     alert('you loose')
      //   }
      //   else{
      //   alert('the letter was not in the word, try again')
      //   }
    }

  console.log(inpLetter)
  let z = document.querySelector(`#${inpLetter}`)
  z.style.textDecoration = "line-through"
  clickCount += 1
  }



  

