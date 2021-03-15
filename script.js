// Variables
var startBtn = document.getElementById("start-btn");
var startCard = document.getElementById("start-card");
var questionCard = document.getElementById("question-card");
var timesUpCard = document.getElementById("times-up-card");
var highscoreCard = document.getElementById("highscore-card");
var restartBtn = document.getElementById("restart");
var viewHighscoreBtn = document.getElementById("view-highscore");
var questionEL = document.getElementById('question');
var answerButtons = document.getElementById('answer-btns');
var submitButton = document.getElementById('submit');
var timerEl = document.getElementById('timer');
var timeLeft
var correct
var scorePlaced = document.getElementById('score')
var initialsInput = document.getElementById('initials')
var highscoresList = document.getElementById('highscore-list')
var clearButton = document.getElementById('clear')


// Page Load
startPage();

function startPage() {
    startCard.style.display = "block";
    questionCard.style.display = "none";
    timesUpCard.style.display = "none";
    highscoreCard.style.display = "none";

    // highscoresList.innerHTML = localStorage.getItem("Highscores")
}

// Buttons
startBtn.onclick = function (){
    startQuiz();
}
viewHighscoreBtn.onclick = function(){
    timesUpCard.style.display = "none";
    startCard.style.display = "none";
    questionCard.style.display = "none";
    highscoreCard.style.display = "block";
}
restartBtn.onclick = function(){
    startPage();
}

// Start the quiz
function startQuiz() {
    startCard.style.display = "none";
    questionCard.style.display = "block";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    correct = 0;
    initialsInput.value = "";
    countdown();
    nextQuestion();
}

// The Countdown timer
function countdown() {
    timeLeft = 30;
  
    var timeInterval = setInterval(function () {
        if (currentQuestionIndex >= 10) {
            return;
        }else if (timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = "Time: " + timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = 'Time:';
            clearInterval(timeInterval);
            timesUpPage();  
        }
    }, 1000);
}

// Variables used for randomizing questions
var shuffledQuestions, currentQuestionIndex;

// --Main Functions--

// Check if at question limit then reset question and select question
function nextQuestion() {
    if (currentQuestionIndex >= 10){
        timeLeft -= 4;
        return timesUpPage();
    }
    resetQuestion()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Reset question function
function resetQuestion(){
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// Question selector and creator
function showQuestion(questions){
    questionEL.innerText = questions.question;

    questions.choices.forEach (choices => {
        var button = document.createElement('button')
        button.innerText = choices
        answerButtons.appendChild(button)

        button.onclick = function() {
            if (this.innerText === questions.answer){
                currentQuestionIndex++
                correct++
                timeLeft += 5;
                nextQuestion();
            } else{
                currentQuestionIndex++
                timeLeft -= 10;
                nextQuestion();
            }
        }
    })
}

// Question Variables
var questions = [
    {
        question: "Which one of these is a coding language?",
        choices: ["Jelly", "Diamond", "Fish", "Javascript"],
        answer: "Javascript"
    },
    {
        question: "What can you use to style a webpage?",
        choices: ["Paint", "CSS", "Airbrush", "Finder"],
        answer: "CSS"
    },
    {
        question: "What does HTML stand for?",
        choices: ["Hyper The Main Language", "Hypertext Marker Listener", "Hypertext Markup Language", "Hidden Through Markup Language"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Cascading Sheets Styled", "Completly Styled Sheets", "Containing Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does DOM stand for?",
        choices: ["Deny Obyss Model", "Deny Object Model", "Document Obyss  Model", "Document Object Model"],
        answer: "Document Object Model"
    },
    {
        question: "Terminal is an application used on which platform?",
        choices: ["Mac", "Windows", "Linux", "Android"],
        answer: "Mac"
    },
    {
        question: "What does it mean to be a full-stack developer?",
        choices: ["You are a cup stacker", "You are a programmer", "You are a lego builder", "You are a photographer"],
        answer: "You are a programmer"
    },
    {
        question: "How often should you commit?",
        choices: ["Never", "Sometimes", "Often", "Once a year"],
        answer: "Often"
    },
    {
        question: "What does HTML create?",
        choices: ["Computer", "Book", "Webpage", "House"],
        answer: "Webpage"
    },
    {
        question: "What is the best coding course?",
        choices: ["Guessing", "Google", "YouTube", "SMU Coding BootCamp"],
        answer: "SMU Coding BootCamp"
    },
    
]

// --Ending Functions--

// Function for when the time runs out
function timesUpPage() {
    timesUpCard.style.display = "block";
    startCard.style.display = "none";
    questionCard.style.display = "none";
    highscoreCard.style.display = "none";

    scorePlaced.innerText = timeLeft

    submitButton.onclick = function(){
        highscorePage();
    }
}

// The highscore page
function highscorePage() {
    timesUpCard.style.display = "none";
    startCard.style.display = "none";
    questionCard.style.display = "none";
    highscoreCard.style.display = "block";

    var liItem = document.createElement('li');
    liItem.innerText = initialsInput.value + " Scored: " + timeLeft + " points"
    highscoresList.appendChild(liItem)
    // localStorage.setItem("Highscores", JSON.stringify(highscoresList.innerHTML));

    // Clear Highscores function
    clearButton.onclick = function (){
        while(highscoresList.firstChild) {
            highscoresList.removeChild(highscoresList.firstChild)
            // localStorage.clear();
    }
}
}