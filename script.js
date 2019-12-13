const url = "https://random-word-api.herokuapp.com/word?key=K7E5G7GF&number=1"
let wordLgth = 0
let word = " "
let inpLetter = ""
let clickCount = 0
let correctCount = 0
let wrongCount = 0
let wrongLetter = 0
let letterArr = []

  fetch(url)
    .then(res => res.json())
    .then(wordData => setUpGame(wordData))
    .catch(err => console.log('this is err',err))
   
  
// set the defualt word with letter spaces
function setUpGame(apiWord){

  word = apiWord[0]  

  wordLgth = word.length
  correctCount = wordLgth

  for(let i = 0; i < wordLgth; i++){
    
      let elm = document.querySelector('.wordspaces')
      let newElem = document.createElement("div")

      let newSpace = document.createAttribute("letterspace")
      newSpace.value = i
      elm.appendChild(newElem).setAttributeNode(newSpace)
      document.querySelector(`[letterspace="${i}"]`).classList.add("letterbox")
    
      document.querySelector(`[letterspace="${i}"]`).style.borderBottom = "solid whitesmoke"
      document.querySelector(`[letterspace="${i}"]`).style.marginRight = "8px"
      
  }
}
// caputure the letter the user inputed and provide the 
// the correct response on the screen
const button = document.querySelector('#inputbutton')
button.addEventListener('click',captureLetter)

function captureLetter(e){
    let wrongLetter = 0
    
    e.preventDefault()
    document.querySelector(".message").innerHTML=" "
    inpLetter = document.querySelector("#letter").value
    if(inpLetter.length > 1){
      document.querySelector(".message").innerHTML="To many letters entered, try again"
    }else{checkLetter(inpLetter)
    }
}
//check if the user already click the letter.
function checkLetter(input){
    let n = letterArr.includes(input)
    
      if(letterArr.includes(input)){
        
        document.querySelector(".message").innerHTML="Letter already used, try again"
        correctCount +=1
        strikeLetter(inpLetter)
      }else{
        letterArr.push(input)
        mainGame()
      }
      
}
  
  

function mainGame(){
 
  if(word.includes(inpLetter)){
       for(let i = 0; i < wordLgth; i++){
        if(word.charAt(i) === inpLetter){
          document.querySelector(`[letterspace="${i}"]`).innerHTML = inpLetter
          correctCount -= 1
          wrongLetter =+1
            }if(correctCount === 0 ){
              document.querySelector(".message").innerHTML="Yeah!!  Winner!!"
              }
            }    
          }else{
            wrongCount += 1
            let color = document.querySelector(`[count="${wrongCount}"]`)
              color.style.opacity = 1; 
          
        if(wrongCount === 6){
            document.querySelector(".message").innerHTML= (`You loose! the word is "${word}"`)
          } 
        }
        strikeLetter(inpLetter)
  }

  function strikeLetter(letter){
      let z = document.querySelector(`#${letter}`)
      z.style.textDecoration = "line-through" 
      clickCount += 1
      document.querySelector('#input').reset()
    }

  // console.log('input letter',inpLetter)
  // console.log('clickcount',clickCount)
  // console.log('correct count',correctCount)
  // console.log('wrong count',wrongCount)
  // console.log('wrong letter',wrongLetter)
  // console.log('letter array',letterArr)

  
  const reset=document.querySelector('.reset')
  reset.addEventListener('click', onReset)

  function onReset(){
    location.reload( )
  
  }
