# SEI-Project1
# Project Overview


## Project Description

I will be making a basic hangman game.  The user will be presented with the letters of the alphabet and a number of spaces equal the number of letters in a word.  The user will need to guess what the word is by entering one letter at a time.  One each guess the corrisponding letter will be crossed off the list.  With each correct letter the it will appear in the corresponding space of the word.  With each incorrect letter a section of the body will appear staring with the head, then the body, left arm, right arm, left leg, and right leg.  The user will also be able to see which letter they have already tried.  If the user is able to guess all of he letters in the word before the full body appears they win the game and will be presented with a winning message.  If he or she is unable to identify all of the letters in the word before the full body appears the user will be presented with a message to try again.


## Priority Matrix

http://res.cloudinary.com/damark726/image/upload/v1513020174/tpm_th4sqg.jpg

## MVP 
  - Load the game with one word hardcoded
  - Present the user with the word spaces
  - Provide the user with an input filed 
  - Present the with the "hangman gallows"
  - With each letter represent the letter as being guessed
  - With each incorrect guess draw part of the body 
  - Present the user a winning message if they guess the word correctly
  - Present the user with a try again message if they do not guess the word
 
## POST MVP
  - Select the word from a random word API
  - Add additional styling to the page
  - Add additional styling to the hangman
  - Create a score, based on time and the number of guess
  - Create a hint that will show one letter at a time of the work
  - Create different levels each, medium and hard

 
## Wireframes


## Game Components

### Landing Page
when the pages loads there will be a the basic looking hangman game.  At the top there will be all of the letters in the alphabet.  In the middle will be the hangman gallows as well as an input box and submit button. The bottom of the page will show a certain number of lines that represent each letter of the word.

### Game Initialization
During the game initialization it will capture the word from a random word API and determine how many letters are in the word.  Once determined the corrisponding spaces will be displayed on the bottom of the pages.  The game will also set a couple of number counts.  They will be used in determining when a part of the figure should be displayed as well as when the game is won or lost.


### Playing The Game
The user will input various letters into the input box in an attempt to guess the word.  Upon click of the submit button a variety of functions will be executed.  First it will determine if the user already use the letter or not.  If they had it will ask them to try again.  If not then it checks to see if the letter in in the word.  If the letter is in the workd it will then loop through all the letters to detemine the correct position.  If the letter is not part of the word it will determine if it is was the first incorrect attempt or not and reveal the corrisponding body part.  The last function will cross off the letter in the list of letters giving the user a visual queue which letters he used.

### Winning The Game
When winning the game the user will be presented with a "your a winner" message.  If they run out of attempts and the full figure appears, the user will be presented with a "you loose" message as well as what the word was.

### Game Reset
There is a "play again" button that will rese the page, select a new workd from the API and initialize the game.

## Functional Components

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Defining variables & setting click events | A | 6hrs| 8hrs | 8hrs |
| Setting all functions (win/lose events) | A | 10hrs| 13hrs | 13hrs |
| Rafactoring my javascript to use classes | A | 6hrs| 8hrs | 8hrs |
| Setting up the form | B | 2hrs| 1hrs | 1hrs |
| HTML & CSS | C | 4hrs| 6hrs | 6hrs |
| Total Time | / | 28hrs| 36hrs | 36hrs |

## Additional Libraries
I did use a google font so I have a link to it in the html.

## Code Snippet
http://res.cloudinary.com/damark726/image/upload/v1513059967/Screen_Shot_2017-12-12_at_1.24.59_AM_myzzfa.png

In this picture, I have essentially the heart of my javascript. It is one "if" statement with eleven "else if" statements. In this snippet of code, I am checking the letter that was clicked and running it through all the possible conditions it could have. I has to fall in one of those 12 statements, and depending on which one it falls in, something will happen. For example, if it is a correct guess, then the mathcing letter will become visible on the winning word, or if it is an incorrect guess, then depending on how many incorrect guesses has happened, it determines which body part should be displayed next.

## Change Log
As part of the post MVP I had wanted to incorporate some hints and levels to the game.  In the end I decided not to and may incorporate them at a later date.  

## Issues and Resolutions
For the most part the project game will well.  I had the easest time writting the HTMl and the javascript.  The hardest part for me was the styling and manipulating the css to get everything to line up correctly.  Some of the issue I ran into was getting the gallows and figure to appears in the correct area.  At first I was using position absolute which was taking the div out of the normal page flow.  Due to this if I wanted to adjust something on the screen I would have to readjust the x and y position.  To resolve this I change from absolute to relative.  This allow me to position everything within a div.  Then if I needed to adjust something I could manipulate the div and everything would adjust with it.  






