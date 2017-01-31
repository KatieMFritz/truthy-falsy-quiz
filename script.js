/***********************************************
/* Set up some variables
************************************************/
// Parts of the HTML
var question = document.getElementById('question')
var explanationArea = document.getElementById('explanation-area')
var next = document.getElementById('next')
var truthyButton = document.getElementById('truthy-button')
var falsyButton = document.getElementById('falsy-button')

// Messages
var truthyExplanation = 'This is truthy, because it is <em>something</em>!'
var falsyExplanation = 'This is falsy, because it is <em>nothing</em>!'
var correct = 'Correct! '
var incorrect = 'Try again! '

// Question Bank
// first set up what your falsy values are
var falsyValues = ['false', '0', 'null', 'undefined']
// combine the falsy values with your truthy values
var questions = falsyValues.concat(
  ['true', '100', '\'apple\'', '\'green\'', '\'0\'', '\'🐱\''])

var isFalsy // declare it globally so you can use it later

/***********************************************************
/* Functions
************************************************************/
// What changes on the page
var refresh = function () {
  // Generate a random index number for our questions array
  var randomIndex = Math.floor(Math.random() * questions.length)
  // Get the value with that index from questions
  var randomQuestion = questions[randomIndex]
  // Change the question on the page
  question.innerHTML = randomQuestion
  // Make the previous answer disappear
  explanationArea.innerHTML = ''
  // Set isFalsy based on the value from questions
  isFalsy = falsyValues.some(function (falsyValue) {
    return question.textContent === falsyValue
  })
}

var clickedTruthy = function () {
  if (isFalsy) {
    explanationArea.innerHTML = incorrect
  } else {
    explanationArea.innerHTML = correct + truthyExplanation
  }
}

var clickedFalsy = function () {
  if (isFalsy) {
    explanationArea.innerHTML = correct + falsyExplanation
  } else {
    explanationArea.innerHTML = incorrect
  }
}

/*************************************************************
/* And now we actually do stuff
**************************************************************/
// Initialize
refresh()

// When the user clicks Truthy, show the answer
truthyButton.addEventListener('click', clickedTruthy)
// When the user clicks Falsy, show the answer
falsyButton.addEventListener('click', clickedFalsy)
// When the user clicks Next, give them a new question
next.addEventListener('click', refresh)
