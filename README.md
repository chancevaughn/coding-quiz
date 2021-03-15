# Are You Smarter Than a Coding Quiz?

## Intro

How confident do you feel in your coding knowledge?

Well take this quiz to find out if you are: "Smarter than a coding Quiz!"?

## Purpose 

This quiz is designed to challenge the new to code; and refreshen the experienced with their knowledge. Just like the popular TV series "Are You Smarter Than a Fifth Grader", this quiz is fundamental enough to make you feel like you know the answer. But do you?

## How Does This Work?

## On The User End

The User is presented with a start page that explains the rules and waits on them to begin the quiz.

![Screenshot]()

Once they click start, the timer starts and the first question is randomly presented.

![Screenshot]()

If they click on the correct answer then they get five seconds added to their time. However if they get the question wrong, then they lose ten seconds from their time. The quiz is over once they run out of questions or if they run out of time. 

After the quiz they have the option to add their score, submit it, and then see their score presented on the highscore board.

![Screenshot]()

Also, if the user presses the reset button then the whole thing starts over. Alternatively if the user presses on the "Clear Highscore" button, then all of the scores are erased and no one has to know if you were Smarter Than a Coding Quiz.

![Screenshot]()

![Screenshot]()

## The Coding Magic

On page load, JavaScript only shows the intended screen and hides all the others.

![Screenshot]()

Next, once the start button is clicked, the function for the quiz to begin is ran. Within this function, the option for shuffled questions is defined, the countdown timer is ran, and other values are reset so that when the quiz is reran then the previous information is cleared.

![Screenshot]()

Now, the count down timer is set to thirty seconds. It also checks to see if the quiz is over. Then it subtracts one away from the timer every second and when the timer hits 0 it ends the quiz.

![Screenshot]()

The main functions work by first checking if there is another question to choose. Then it selects a random question with its corresponding answers and presents it to the user.

![Screenshot]()

Once the user selects an answer, the code checks to see if their selected answer matches what the correct answer is on file. If they match then five seconds is added to the timer. However if they do not match then ten seconds is deducted from the timer.

![Screenshot]()

Lastly, the score is caused by the amount of time that the user has left.

## Contributors

Chance V. Robinson

## License

N/A