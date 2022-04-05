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
        question: "Sample question1",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B",
    },
    {
        question: "Sample question2",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B",
    },
    {
        question: "Sample question3",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B",
    }
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

