var timerEl = document.getElementsByID('timer');
var mainEl = document.getElementById('xxx');
var startScreenEl = document.getElementByID('startScreen');
var questionsEl = document.getElementByID();
var time = 75;
var timerID;
var questionIndex = 0
var answersEl = document.getElementById('answers')


var questions = [
    {
        question: "In the ‘array’ [5, 8, apple, syntax], what is the information at index array.3?",
        choices: [5, 8, "Apple", "Syntax"],
        correctAnswer: "D",
    },
    {
        question: "Which of the following is not a language you will learn during this bootcamp?",
        choices: ["JavaScript", "Bootstrap", "Java", "jQuery"],
        correctAnswer: "C",
    },
    {
        question: "The term “CSS” is an acronym for:",
        choices: ["Creative Sheet Source", "Cascading Style Sheet", "C+ System Source", "Community Sourced Styling"],
        correctAnswer: "B",
    },
    {
        question: "In the ‘array’ [5, 8, apple, Syntax], the js command (array.length) will return the value:",
        choices: ["13", "4", "3", "Null"],
        correctAnswer: "B",
    },
    {
        question: "Which of the following is NOT an alias used by our class instructor?",
        choices: ["John Dinsmore", "John Williams", "John Claude Van Damme", "John Wick"],
        correctAnswer: "A",
    },

]

// function to start game 
function StartGame() {
    startScreenEl.setattribute("class", "hide")
    questionsEl.removeAttribute("class");
    timerID = setInterval(countdown, 1000);
    timerEl.textContent = time;
    getQuestion();
}

// function to get question 
function getQuestion() {
    var currentQuestion = questions[questionIndex];
    var questionAskEl = document.getElementById('questionAsk');
    questionAskEl.textContent = currentQuestion.question;
    currentQuestion.choices.forEach(function (answer, i) {
        var options = document.createElement("button")
        options.setAttribute("class", "answer");
        options.setAttribute("value", answer);
        options.textContent = i + 1 + answer;
        answersEl.appendChild (options);
        options.onclick = nextQuestion;
    }
    )
    // title element variable to set equal to currentQuestion
    // titleElement.textContent = currentQuestion.questions; 
    // choicesEl.textContent = 
}
function nextQuestion () {
    if (this.value !== questions[questionIndex].correctAnswer) {
        time = time - 10;
        timerEl.textContent = time;
        var answerResultEl.textContent = "Incorrect!";
    }
    else {
        answerResultEl.textContent = "Correct!!";
    }
    questionIndex = questionIndex + 1
}
 
if (questionIndex === question.length) {
    finalScreen ()
}
else {
    getQuestion ();
}

function countdown () {
    time--;
    timerEl.textContent = time;
    if (time < 1) {
        finalScreen ();
    }
}
// need function for line 67 - finalScreen 



// function to verify correct respons (question click) 

// function to end quiz and reset page 

// function for clock 

// function for score logging

// onclick methods 

