var startBtn = document.getElementById("start-btn");
var startCard = document.getElementById("start-card");
var questionCard = document.getElementById("question-card");
var timesUpCard = document.getElementById("times-up-card");
var highscoreCard = document.getElementById("highscore-card");
var restartBtn = document.getElementById("restart");
var viewHighscoreBtn = document.getElementById("view-highscore");
var questionEL = document.getElementById('question');
var answerButtons = document.getElementById('answer-btns');

var shuffledQuestions, currentQuestionIndex;

var questions = [
    {
    question: "who are you?",
    answers:["me", "you", "them", "us"],
    correctAnswer: 0
    },
    {
    question: "who am i?",
    answers:["us", "me", "you", "them"],
    correctAnswer: 2
    }
]

restartBtn.onclick = function(){
    startPage();
}
startBtn.onclick = function() {
    startQuiz();
}
viewHighscoreBtn.onclick = function(){
    highscorePage();
}

function startPage() {
    startCard.style.display = "block";
    questionCard.style.display = "none";
    timesUpCard.style.display = "none";
    highscoreCard.style.display = "none";
}

startPage();

function startQuiz() {
    startCard.style.display = "none";
    questionCard.style.display = "block";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextQuestion();
}
function nextQuestion() {
    resetQuestion()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionEL.innerText = question.question
    var i 
    for (i=0; i < question.answers.length; i++){
        button = document.createElement("button")
        button.innerText = questions.answers.text
        answerButtons.appendChild(button)
        console.log("hey")
    }
}

function resetQuestion(){
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function highscorePage() {
    timesUpCard.style.display = "none";
    startCard.style.display = "none";
    questionCard.style.display = "none";
    highscoreCard.style.display = "block";
}