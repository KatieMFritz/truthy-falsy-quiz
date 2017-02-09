/***********************************************
/* Set up some variables
************************************************/
// Parts of the HTML
var questionArea = document.getElementById('question')
var answerArea = document.getElementById('answer')
var next = document.getElementById('next')
var truthyButton = document.getElementById('truthy-button')
var falsyButton = document.getElementById('falsy-button')

// Questions
var questions = {
  'truthyTrue': {
    statement: ['true'],
    explanation: 'This is truthy, because it\'s literally <em>true</em>!'
  },
  truthyNumber: {
    statement: ['100', '-7', '0.25'],
    explanation: 'This is truthy, because it\'s <em>something</em> - a non-zero number!'
  },
  truthyString: {
    statement: ['\'apple\'', '\'green\'', '\'0\'', '\'🐱\'', '\'false\''],
    explanation: 'This is truthy, because it\'s <em>something</em> - a non-empty string!'
  },
  falsyValues: {
    statement: ['false', '0', 'null', 'undefined', '\'\''],
    explanation: 'This is falsy, because it is <em>nothing</em>!'
  }
}

// Messages
var correct = 'Correct! '
var incorrect = 'Try again! '

// combine them all into your question bank
var questionBank = []
Object.keys(questions).forEach(function (key) {
  questionBank = questionBank.concat(questions[key].statement)
})

var updateQuestionArea = function () {
  // use vals array
  questionArea.textContent = questionBank.join(' + ')
}

/***********************************************************
/* Functions
************************************************************/
// What changes on the page
var refresh = function () {
  // Generate a random index number for our questions array
  var randomIndex = Math.floor(Math.random() * questionBank.length)
  // Get the value with that index from questions
  var randomQuestion = questionBank[randomIndex]
  // Change the question on the page
  questionArea.innerHTML = randomQuestion
  // Make the previous answer disappear
  answerArea.innerHTML = ''
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
