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
var answer1 = document.getElementById('a1')
var answer2 = document.getElementById('a2')
var answer3 = document.getElementById('a3')
var answer4 = document.getElementById('a4')
var answer5 = document.getElementById('a1')
var answer6 = document.getElementById('a2')
var answer7 = document.getElementById('a3')
var answer8 = document.getElementById('a4')
var timerEl = document.getElementById('timer');
var timeLeft

var question1 = "Which one of these is a coding language?"
var q1a1 = "Jelly"
var q1a2 = "Diamond"
var q1a3 = "Fish"
var q1a4 = "Javascript"
var question2 = "What can you use to style a webpage?"
var q2a1 = "Paint"
var q2a2 = "CSS"
var q2a3 = "Airbrush"
var q2a4 = "Finder"
var question3 = "What does HTML stand for?"
var q3a1 = "Hyper The Main Language"
var q3a2 = "Hypertext Marker Listener"
var q3a3 = "Hypertext Markup Language"
var q3a4 = "Hidden Through Markup Language"
var question4 = "What does CSS stand for?"
var q4a1 = "Cascading Style Sheets"
var q4a2 = "Cascading Sheets Styled"
var q4a3 = "Completly Styled Sheets"
var q4a4 = "Containing Style Sheets"
var question5 = "What does DOM stand for?"
var q5a1 = "Deny Obyss Model"
var q5a2 = "Deny Object Model"
var q5a3 = "Document Obyss Model"
var q5a4 = "Document Object Model"
var question6 = "Terminal is an application used on which platform?"
var q6a1 = "Mac"
var q6a2 = "Windows"
var q6a3 = "Linux"
var q6a4 = "Android"
var question7 = "What does it mean to be a full-stack developer?"
var q7a1 = "You are a cup stacker"
var q7a2 = "You are a programmer"
var q7a3 = "You are a lego builder"
var q7a4 = "You are a photographer"
var question8 = "How often should you commit?"
var q8a1 = "Never"
var q8a2 = "Sometimes"
var q8a3 = "Often"
var q8a4 = "Once a year"
var question9 = "What does HTML create?"
var q9a1 = "Computer"
var q9a2 = "Book"
var q9a3 = "Webpage"
var q9a4 = "House"
var question10 = "What is the best coding course?"
var q10a1 = "Guessing"
var q10a2 = "Google"
var q10a3 = "YouTube"
var q10a4 = "SMU Coding BootCamp"


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
    countdown();
    showQuestion1();
}
function resetQuestion(){
    questionEL.innerText = "";
    answer1.innerText = "";
    answer2.innerText = "";
    answer3.innerText = "";
    answer4.innerText = "";
}
// function createBoxes(){
//     var button1 = document.createElement('button');
//     var button2 = document.createElement('button');
//     var button3 = document.createElement('button');
//     var button4 = document.createElement('button');
//     button1 = document.getElementById("a1")
//     button2 = document.getElementById("a2")
//     button3 = document.getElementById("a3")
//     button4 = document.getElementById("a4")
//     answerButtons.appendChild(button1)
//     answerButtons.appendChild(button2)
//     answerButtons.appendChild(button3)
//     answerButtons.appendChild(button4)
// }

function showQuestion1(){
    resetQuestion()
    questionEL.innerText = question1
    answer1.innerText = q1a1;
    answer2.innerText = q1a2;
    answer3.innerText = q1a3;
    answer4.innerText = q1a4;

    if (answer4.innerText === q1a4){
        answer4.onclick = function(){
            timeLeft+=10;
            console.log('hey');
            timeLeft-=10;
            return showQuestion2();
    }
}
    else { 
        answerButtons.onclick = function(){
            timeLeft-=10;
            showQuestion2();
            console.log('worked');
        }
        
    }
    
}
function showQuestion2(){
    resetQuestion()
    questionEL.innerText = question2
    answer5.innerText = q2a1
    answer6.innerText = q2a2
    answer7.innerText = q2a3
    answer8.innerText = q2a4
    answer6.onclick = function(){
        timeLeft+=10;
        console.log('yes')
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion3();
    }
}
function showQuestion3(){
    resetQuestion()
    questionEL.innerText = question3
    answer1.innerText = q3a1
    answer2.innerText = q3a2
    answer3.innerText = q3a3
    answer4.innerText = q3a4
    answer3.onclick = function(){
        console.log('yes')
        timeLeft+=10;
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion4();
    }
}
function showQuestion4(){
    resetQuestion()
    questionEL.innerText = question4
    answer1.innerText = q4a1
    answer2.innerText = q4a2
    answer3.innerText = q4a3
    answer4.innerText = q4a4
    answer1.onclick = function(){
        timeLeft+=10;
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion5();
    }
}
function showQuestion5(){
    resetQuestion()
    questionEL.innerText = question5
    answer1.innerText = q5a1
    answer2.innerText = q5a2
    answer3.innerText = q5a3
    answer4.innerText = q5a4
    answer4.onclick = function(){
        timeLeft+=10;
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion6();
    }
}
function showQuestion6(){
    resetQuestion()
    questionEL.innerText = question6
    answer1.innerText = q6a1
    answer2.innerText = q6a2
    answer3.innerText = q6a3
    answer4.innerText = q6a4
    answer1.onclick = function(){
        timeLeft+=10;
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion7();
    }
}
function showQuestion7(){
    resetQuestion()
    questionEL.innerText = question7
    answer1.innerText = q7a1
    answer2.innerText = q7a2
    answer3.innerText = q7a3
    answer4.innerText = q7a4
    answer2.onclick = function(){
        timeLeft+=10;
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion8();
    }
}
function showQuestion8(){
    resetQuestion()
    questionEL.innerText = question8
    answer1.innerText = q8a1
    answer2.innerText = q8a2
    answer3.innerText = q8a3
    answer4.innerText = q8a4
    answer3.onclick = function(){
        timeLeft+=10;
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion9();
    }
}
function showQuestion9(){
    resetQuestion()
    questionEL.innerText = question9
    answer1.innerText = q9a1
    answer2.innerText = q9a2
    answer3.innerText = q9a3
    answer4.innerText = q9a4
    answer3.onclick = function(){
        timeLeft+=10;
    }
    answerButtons.onclick = function(){
        timeLeft-=10;
        showQuestion10();
    }
}
function showQuestion10(){
    resetQuestion()
    questionEL.innerText = question10
    answer1.innerText = q10a1
    answer2.innerText = q10a2
    answer3.innerText = q10a3
    answer4.innerText = q10a4
    answer4.onclick = function(){
        
    }
    answerButtons.onclick = function(){
        timeLeft-=30
        timesUpPage();
    }
}

// function resetQuestion(){
//     while(answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild)
//     }
// }

function timesUpPage() {
    timesUpCard.style.display = "block";
    startCard.style.display = "none";
    questionCard.style.display = "none";
    highscoreCard.style.display = "none";
    submitButton.onclick = function(){
        highscorePage();
    }
}
function highscorePage() {
    timesUpCard.style.display = "none";
    startCard.style.display = "none";
    questionCard.style.display = "none";
    highscoreCard.style.display = "block";
}

function countdown() {
    timeLeft = 30;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
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
  