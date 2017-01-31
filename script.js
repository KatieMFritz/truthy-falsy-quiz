// Parts of the HTML
var tellMe = document.getElementById('tell-me')
var question = document.getElementById('question')
var explanationArea = document.getElementById('explanation-area')
var next = document.getElementById('next')

// Messages
var truthyExplanation = 'This is truthy, because it is <em>something</em>!'
var falsyExplanation = 'This is falsy, because it is <em>nothing</em>!'

var isFalsy
var falsyValues = ['false', '0', 'null', 'undefined']

// Stuff to Change
var refresh = function () {
  explanationArea.innerHTML = ''
  var random = Math.random()
  if (random > 0.9) {
    question.innerHTML = 'apple'
  } else if (random > 0.8) {
    question.innerHTML = 'null'
  } else if (random > 0.7) {
    question.innerHTML = '0'
  } else if (random > 0.6) {
    question.innerHTML = '\'0\''
  } else if (random > 0.5) {
    question.innerHTML = '100'
  } else if (random > 0.4) {
    question.innerHTML = '0'
  } else if (random > 0.3) {
    question.innerHTML = '🐱'
  } else if (random > 0.2) {
    question.innerHTML = 'false'
  } else if (random > 0.1) {
    question.innerHTML = 'green'
  } else {
    question.innerHTML = 'undefined'
  }
  isFalsy = falsyValues.some(function (falsyValue) {
    return question.textContent === falsyValue
  })
}

var EXPLAIN = function () {
  if (isFalsy) {
    explanationArea.innerHTML = falsyExplanation
  } else {
    explanationArea.innerHTML = truthyExplanation
  }
}

// Initialize
refresh()

// Event listeners
tellMe.addEventListener('click', EXPLAIN)
next.addEventListener('click', refresh)
