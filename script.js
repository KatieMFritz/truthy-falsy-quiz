// cSpell:words truthy falsy

/***********************************************
/* Set up some variables
************************************************/
// Parts of the HTML
var questionArea = document.getElementById('question')
var answerArea = document.getElementById('answer')
var nextButton = document.getElementById('next')
var truthyButton = document.getElementById('truthy-button')
var falsyButton = document.getElementById('falsy-button')

// Messages
var correct = 'Correct! '
var incorrect = 'Try again! '

// Questions
var questions = {
  truthyTrue: {
    which: 'truthy',
    statements: ['true'],
    explanation: 'This is truthy, because it\'s literally <em>true</em>!'
  },
  truthyNumber: {
    which: 'truthy',
    statements: ['100', '-7', '0.25'],
    explanation: 'This is truthy, because it\'s <em>something</em> - a non-zero number!'
  },
  truthyString: {
    which: 'truthy',
    statements: ['\'apple\'', '\'green\'', '\'0\'', '\'🐱\'', '\'false\''],
    explanation: 'This is truthy, because it\'s <em>something</em> - a non-empty string!'
  },
  falsyValues: {
    which: 'falsy',
    statements: ['false', '0', 'null', 'undefined', '\'\''],
    explanation: 'This is falsy, because it is <em>nothing</em>!'
  }
}

// combine them all into your question bank
var questionBank = []
Object.keys(questions).forEach(function (key) {
  questionBank = questionBank.concat(questions[key].statements)
})

/***********************************************************
/* Functions
************************************************************/
var randomQuestion = ''
var answer = ''
var explanation = ''

var getQuestion = function() {
  // Generate a random index number for our questions array
  var randomIndex = Math.floor(Math.random() * questionBank.length)
  // Get the value with that index from questions
  randomQuestion = questionBank[randomIndex]
  // check all the statements for each question key against randomQuestion
  Object.keys(questions).forEach(function (key) {
    var questionStatements = questions[key].statements
    // if randomQuestion is found in the statements for one of the question types
    if (questionStatements.indexOf(randomQuestion) !== -1) {
      // set some values
      answer = questions[key].which
      explanation = questions[key].explanation
    }
  })
}

var refresh = function () {
  getQuestion()
  // Change the question on the page
  questionArea.innerHTML = randomQuestion
  // Make the previous answer disappear
  answerArea.innerHTML = ''
}

var clickedTruthy = function () {
  if (answer === 'falsy') {
    answerArea.innerHTML = incorrect
  } else {
    answerArea.innerHTML = correct + explanation
  }
}

var clickedFalsy = function () {
  if (answer === 'truthy') {
    answerArea.textContent = incorrect
  } else {
    answerArea.textContent = correct + explanation
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
// When the user clicks nextButton, give them a new question
nextButton.addEventListener('click', refresh)
