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
    document.querySelector(`[letterspace="${i}"]`).style.marginRight = "8px"
    
}

// caputure the letter the user inputed and provide the 
// the correct response on the screen
const button = document.querySelector('#inputbutton')
button.addEventListener('click',captureLetter)


let inpLetter = ""
let clickCount = 0
let correctCount = wordLgth
let wrongCount = 1
let wrongLetter = 0
let letterArr = []


function captureLetter(e){
  let wrongLetter = 0
  
 // console.log('this is the letter',inpLetter.value)
  console.log(e)
  e.preventDefault()
  
  inpLetter = document.querySelector("#letter").value

  letterArr.push(inpLetter)
  letterArr.forEach(checkLetter(inpLetter))

  function checkLetter(letter)
  


  console.log('input letter',inpLetter)
  console.log('word length',wordLgth)
  
  for(let i = 0; i < wordLgth; i++){
    
    console.log(letterArr)
    if(word.charAt(i) === inpLetter){
        console.log(`this letter ${i} equals the input letter`)
        document.querySelector(`[letterspace="${i}"]`).innerHTML = inpLetter
            //document.querySelector(`[data-letter=${e.key}]`)
        correctCount -= 1
        wrongLetter =+1
      }
      console.log(correctCount)
    if(correctCount === 0 ){
        document.querySelector(".message").innerHTML="Yeah!!  Winner!!"
      }

      console.log(wrongLetter)

    }
      if(wrongLetter === 0){
        let color = document.querySelector(`[count="${wrongCount}"]`)
        color.style.opacity = 1;
        console.log('this is the wrongCount',wrongCount)
        wrongCount += 1
        console.log('this is the wrongCount2',wrongCount)
        if(wrongCount > 6){
            document.querySelector(".message").innerHTML="You loose!"
          } 
             
        
    }
  console.log(inpLetter)
  let z = document.querySelector(`#${inpLetter}`)
  z.style.textDecoration = "line-through" 
  clickCount += 1
  document.querySelector('#input').reset()


  }



  

