const displayQuestion = () => {
    const question = questions.shift();
    // console.log(questions);
    const quiz = $(`<div class="card quiz_card text-white">
                      <div class= "card-header">
                        ${question.title}
                      </div>
                    </div >`);

    const choicesList = $('<ul class="list-group"></ul>');

    choicesList.on('click', (e) => { handleAnswerClick(e, question.answer) })

    question['choices'].forEach(choice => {
      choicesList.append(`<li  class="list-group-item mt-3">${choice}</li>`);
    })
    quiz.append(choicesList);
    $('.quiz').append(quiz);
  }
  
  const handleAnswerClick = (e, answer) => {
    e.preventDefault();

    if ($(e.target).html() === answer) {
      e.target.style.backgroundColor = '#164032';
      correct+=1;
      totalTime+=10;
      setTimeout(() => {
        $('.quiz').empty();
        if (questions.length !== 0) {
          displayQuestion();
        }else {
          gameTime = totalTime;
          endGame();
          $('.time').text(totalTime);
          totalTime = 0;
        }
      }, 1000);
    } else {
      wrong++;
      e.target.style.borderColor = '#e53935';
      e.target.style.backgroundColor = '#661917';
      setTimeout(() => {
        totalTime -= 9;
        if (totalTime <= 0) {
          totalTime = 0
        }
        $('.quiz').empty();
        displayQuestion();
      }, 1000);
    }
  }
  