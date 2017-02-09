/***********************************************
/* Set up some variables
************************************************/
// Parts of the HTML
var question = document.getElementById('question')
var answer = document.getElementById('answer')
var next = document.getElementById('next')
var truthyButton = document.getElementById('truthy-button')
var falsyButton = document.getElementById('falsy-button')

// Messages
var whyTruthy = 'This is truthy, because it is <em>something</em>!'
var whyTruthyTrue = 'This is truthy, because it\'s literally <em>true</em>!'
var whyTruthyNumber = 'This is truthy, because it\'s <em>something</em> - a non-zero number!'
var whyTruthyString = 'This is truthy, because it\'s <em>something</em> - a non-empty string!'
var whyFalsy = 'This is falsy, because it is <em>nothing</em>!'
var correct = 'Correct! '
var incorrect = 'Try again! '

// Question Bank
// first set up what your falsy values are
var falsyValues = ['false', '0', 'null', 'undefined', '\'\'']
// then set up some truthy values
var truthyStrings = ['\'apple\'', '\'green\'', '\'0\'', '\'🐱\'', '\'false\'']
var truthyNumbers = ['100', '-7', '0.25']
var truthyTrue = ['true']
// combine them all into your question bank
var questions = falsyValues.concat(truthyStrings, truthyNumbers, truthyTrue)

// Declare these globally so you can use them later
var isFalsy
var isTruthyString
var isTruthyNumber
var isTruthyTrue

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
  answer.innerHTML = ''
  // Set isFalsy based on the value from questions
  isFalsy = falsyValues.some(function (falsyValue) {
    return question.textContent === falsyValue
  })
  isTruthyString = truthyStrings.some(function (truthyString) {
    return question.textContent === truthyString
  })
  isTruthyNumber = truthyNumbers.some(function (truthyNumber) {
    return question.textContent === truthyNumber
  })
  isTruthyTrue = truthyTrue.some(function (truthyTrue) {
    return question.textContent === truthyTrue
  })
}

var clickedTruthy = function () {
  if (isFalsy) {
    answer.innerHTML = incorrect
  } else if (isTruthyString) {
    answer.innerHTML = correct + whyTruthyString
  } else if (isTruthyNumber) {
    answer.innerHTML = correct + whyTruthyNumber
  } else if (isTruthyTrue) {
    answer.innerHTML = correct + whyTruthyTrue
  } else {
    answer.innerHTML = correct + whyTruthy
  }
}

var clickedFalsy = function () {
  if (isFalsy) {
    answer.innerHTML = correct + whyFalsy
  } else {
    answer.innerHTML = incorrect
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
