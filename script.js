const quizData = [
  {
    question: '15 + 15 = ...',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'c'
  },
  {
    question: '5 + 5 = ...',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'a'
  },
  {
    question: '10 + 10 = ...',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'b'
  },
  {
    question: '10 + 0 = ...',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'a'
  },
  {
    question: '20 + 20 = ...',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'd'
  }
]

const answerEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let answer = undefined
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2>You're score = ${score}</h2><button onclick='location.reload()'>Reload</button>`
    }
  }
})