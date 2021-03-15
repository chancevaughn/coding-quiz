// setting all of the variables
var startBtn = document.getElementById("start-btn");
var startCard = document.getElementById("start-card");
var questionCard = document.getElementById("question-card");
var timesUpCard = document.getElementById("times-up-card");
var highscoreCard = document.getElementById("highscore-card");
var restartBtn = document.getElementById("restart");
var viewHighscoreBtn = document.getElementById("view-highscore");
var questionEL = document.getElementById('question');
var answerButtons = document.getElementById('answer-btns');

// creating a questions array and variables to be used 
//...later for shuffled and to keep track of what question we are on
var shuffledQuestions, currentQuestionIndex;
var questions = [
    {
        question: 'What is life?',
        answers: [
            {text: "Chocolate", correct: false},
            {text: "God", correct: true},
            {text: "People", correct: false},
            {text: "Nothing", correct: false}
        ]
    }
]

// setting what clicking each button does
restartBtn.onclick = function(){
    startPage();
}
startBtn.onclick = function() {
    startQuiz();
}
viewHighscoreBtn.onclick = function(){
    highscorePage();
}

// creating what the page does on load
function startPage() {
    startCard.style.display = "block";
    questionCard.style.display = "none";
    timesUpCard.style.display = "none";
    highscoreCard.style.display = "none";
}

startPage();

// creating what happens when the user clicks on start to start the quiz
function startQuiz() {
    startCard.style.display = "none";
    questionCard.style.display = "block";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextQuestion();
}

// creating how each question gets selected
function nextQuestion() {
    resetQuestion()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetQuestion(){
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
var correct
// var button
var answer
// choosing what each question is and printing it to the html
function showQuestion(question){
    questionEL.innerText = question.question
    var i 
    // for (i=0; i < question.answers.length; i++){
    //     button = document.createElement("button")
    //     button.innerText = qanswers.text
    //     answerButtons.appendChild(button)
    //     console.log("hey")
    // }

    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        answerButtons.appendChild(button)
        button.addEventListener("click", console.log("hi"));
        // console.dir(answer.correct)
    })
    // // button.addEventListener("click", console.log("hi"));
    
}

function selectAnswer() {
    console.dir(answer)
    // const selectedButton = e.target
    // const correct = selectedButton.dataset.correct
    // Array.from(answerButtons.children).forEach(button => {
    //   setStatus(button, button.dataset.correct)
    // })
    // console.log(correct)

    // console.log(answer.value);
    // if (){
    //     console.log('true')
    // } else {
    //     console.log('false')
    // }

    // var correct = selectedButton.dataset.correct
    // Array.from(answerButtons.children).forEach(button => {
    //     setStatus(button, button.dataset.correct)
    // })
}

// function setStatus(element, correct) {
//     if(correct){
//         console.log('yes')
//     } else {
//         console.log('no')
//     }

// }

// creating what happens when the quiz is over
function endQuiz() {
    questionCard.style.display = "none";
    timesUpCard.style.display = "block";
}


// creating what the highscore page is and what it looks like
function highscorePage() {
    timesUpCard.style.display = "none";
    startCard.style.display = "none";
    questionCard.style.display = "none";
    highscoreCard.style.display = "block";
}