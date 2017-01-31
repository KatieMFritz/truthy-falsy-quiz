// Parts of the HTML
var truthy = document.getElementById('truthy')
var falsy = document.getElementById('falsy')
var question = document.getElementById('question')
var explanationArea = document.getElementById('explanation-area')

// Messages
var truthyExplanation = 'This is truthy, because it is <em>something</em>!'
var falsyExplanation = 'This is falsy, because it is <em>nothing</em>!'

// Stuff to Change
var EXPLAIN = function () {
  if (question.innerHTML === (0 || '' || false || null || undefined)) {
    explanationArea.innerHTML = falsyExplanation
  } else {
    explanationArea.innerHTML = truthyExplanation
  }
}

var refresh = function () {
  var random = Math.random()
  if (random > 0.9) {
    question.innerHTML = 'null'
  } else {
    question.innerHTML = 'undefined'
  }
}

// Event listeners
truthy.addEventListener('click', EXPLAIN)
falsy.addEventListener('click', EXPLAIN)
next.addEventListener('click', refresh)
