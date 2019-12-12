// set the defualt word with letter spaces
const word = 'apple'
let wordLgth = word.length
console.log(wordLgth)
for(let i = 0; i < wordLgth; i++){
  console.log(i)
    let elm = document.querySelector('.wordspaces')
    let newElem = document.createElement("div")

    let newSpace = document.createAttribute("letterspace")
    newSpace.value = i
    elm.appendChild(newElem).setAttributeNode(newSpace)
    document.querySelector(`[letterspace="${i}"]`).classList.add("letterbox")
    // document.querySelector(`[letterspace="${i}"]`).innerHTML = "  "
    document.querySelector(`[letterspace="${i}"]`).style.borderBottom = "solid whitesmoke"
    document.querySelector(`[letterspace="${i}"]`).style.marginRight = "4px"
    
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
  e.preventDefault()
  inpLetter = document.querySelector("#letter").value
  console.log('input letter',inpLetter)
  console.log('word length',wordLgth)
  
  for(let i = 0; i < wordLgth; i++){
    if(word.charAt(i) === inpLetter){
        console.log(`this letter ${i} equals the input letter`)
        document.querySelector(`[letterspace="${i}"]`).innerHTML = inpLetter
            //document.querySelector(`[data-letter=${e.key}]`)
        correctCount += 1
            
    }
  }
    console.log(correctCount)
    if(correctCount > 0 ){
      // alert('you found a match')
    }else{
      let color = document.querySelector(`[count="${wrongCount}"]`)
      color.style.opacity = 1;
      console.log('this is the wrongCount',wrongCount)
      wrongCount += 1
      console.log('this is the wrongCount2',wrongCount)
       if(wrongCount > 6){
           alert('you loose')
         }
      
    }

  console.log(inpLetter)
  let z = document.querySelector(`#${inpLetter}`)
  z.style.textDecoration = "line-through"
  clickCount += 1
  document.querySelector('#input').reset()

  
  }



  

