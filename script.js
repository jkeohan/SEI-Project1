const url = "https://random-word-api.herokuapp.com/word?key=ZIQQMIB2&number=1"
let wordLgth = 0
let word = " "
let inpLetter = ""
let clickCount = 0
let correctCount = 0
let wrongCount = 0
let wrongLetter = 0
let letterArr = []

  console.log('before')
  fetch(url)
    .then(res => res.json())
    // .then(wordData => console.log(wordData))
    .then(wordData => setUpGame(wordData))
    .catch(err => console.log('this is err',err))
  // console.log(wordData)
  console.log('after')
  // let arr = wordData
  // console.log(arr[0])
  // console.log([0])
// function selectAllPok(data){
//   console.log(data)
//   // for(let i = 0; 0 < data.length; i++){
//     // let apiWord = data
//     // let results=document.querySelector('#results')
//     // let button = document.createElement('button')
//     // button.appendChild(document.createTextNode(name))
//     // results.appendChild(button)
//     console.log(apiWord)
//     setUpGame(data)
//   }





// set the defualt word with letter spaces
function setUpGame(apiWord){
console.log(apiWord)
word = apiWord[0]  
console.log(word) 
wordLgth = word.length
correctCount = wordLgth
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
}
// caputure the letter the user inputed and provide the 
// the correct response on the screen
const button = document.querySelector('#inputbutton')
button.addEventListener('click',captureLetter)

// correctCount = wordLgth
// console.log('word lenght',wordLgth)
// console.log('correct count',correctCount)

function captureLetter(e){
  let wrongLetter = 0
   console.log(e)
  e.preventDefault()
  document.querySelector(".message").innerHTML=" "
  inpLetter = document.querySelector("#letter").value
  if(inpLetter.length > 1){
    document.querySelector(".message").innerHTML="To many letters entered, try again"
  }
  else{checkLetter(inpLetter)
  }
}
//check if the user already click the letter.
function checkLetter(input){
    let n = letterArr.includes(input)
    console.log('check to see if the array have a value',n)
      if(letterArr.includes(input)){
        console.log(letterArr.includes(input))
        document.querySelector(".message").innerHTML="Letter already used, try again"
        correctCount +=1
        strikeLetter(inpLetter)
      }
      else{
        letterArr.push(input)
        mainGame()
      }
      
}
  console.log(letterArr)
  

function mainGame(){
  console.log('input letter',inpLetter)
  console.log('word length',wordLgth)
  console.log('this is the word',word)
  
  if(word.includes(inpLetter)){
          for(let i = 0; i < wordLgth; i++){
            
            console.log(letterArr)
            if(word.charAt(i) === inpLetter){
                console.log(`this letter ${i} equals the input letter`)
                document.querySelector(`[letterspace="${i}"]`).innerHTML = inpLetter
                    //document.querySelector(`[data-letter=${e.key}]`)
                correctCount -= 1
                wrongLetter =+1
                console.log('wrongletter counter',wrongLetter)
            }if(correctCount === 0 ){
                document.querySelector(".message").innerHTML="Yeah!!  Winner!!"
            }
          }    
          
    }else{
        wrongCount += 1
        let color = document.querySelector(`[count="${wrongCount}"]`)
        color.style.opacity = 1; 
        console.log('this is the wrongCount',wrongCount)
        
        console.log('this is the wrongCount2',wrongCount)
        if(wrongCount === 6){
            document.querySelector(".message").innerHTML= (`You loose! the word is "${word}`)
          } 
    }
    strikeLetter(inpLetter)
  }

  function strikeLetter(letter){
  console.log(letter)
  let z = document.querySelector(`#${letter}`)
  z.style.textDecoration = "line-through" 
  clickCount += 1
  document.querySelector('#input').reset()


  console.log('input letter',inpLetter)
  console.log('clickcount',clickCount)
  console.log('correct count',correctCount)
  console.log('wrong count',wrongCount)
  console.log('wrong letter',wrongLetter)
  console.log('letter array',letterArr)

  }


  const reset=document.querySelector('.reset')
  reset.addEventListener('click', onReset)
  function onReset(){
    location.reload( )
  
  }
