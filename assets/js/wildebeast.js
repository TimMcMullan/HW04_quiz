var interval = null;

var questions = [     
    {         
        question: "In the array [5, 8, apple, syntax], what is the information at index array.3?",
        choices: [5, 8, "Apple", "Syntax"],         
        correctAnswer: "D",     
    },     
    {         
        question: "Which of the following is not a language you will learn during this bootcamp?",         
        choices: ["JavaScript", "Bootstrap", "Java", "jQuery"],         
        correctAnswer: "C",     
    },     
    {         
        question: "The term \"CSS\" is an acronym for:",         
        choices: ["Creative Sheet Source", "Cascading Style Sheet", "C+ System Source", "Community Sourced Styling"],         
        correctAnswer: "B",     
    },     
    {         
        question: "In the \'array\' [5, 8, apple, Syntax], the js command (array.length) will return the value:",         
        choices: ["13", "4", "3", "Null"],         
        correctAnswer: "B",     
    },
    {         
        question: "Which of the following is NOT an alias used by our class instructor?",         
        choices: ["John Dinsmore", "John Williams", "John Claude Van Damme", "John Wick"],
        correctAnswer: "A",
    }
]

var counter = 75;


function questionLoad() {
    var questionId = $('#question-content').attr('data-question');
    $('#wrong-or-right p').html("");
    if (parseInt(questionId) == questions.length) {
        $('#question-container').addClass("hide");
        $('#all-done').removeClass("hide");
        $('#final-score').text(counter);
        clearInterval(interval);

        // local storage writing would go here
        localStorage.setItem("initials", $('#initials').val());
        localStorage.setItem("score", counter);
        // local storage would end here

    } else {
        $('#question-content').attr('data-question', parseInt(questionId)+1);
        $('#question-content p').text(questions[questionId].question)

        $('#button-A').text(questions[questionId].choices[0]);
        $('#button-B').text(questions[questionId].choices[1]);
        $('#button-C').text(questions[questionId].choices[2]);
        $('#button-D').text(questions[questionId].choices[3]);


        $('.button-answer').attr("correct", "no");
        $('#button-'+questions[questionId].correctAnswer).attr("correct", "yes");
    }

    return;
}

$(function(){
    $('#quiz-introduction .btn-primary').on('click', function(evt){
        $('#quiz-introduction').addClass('hide');
        $('#question-container').removeClass('hide');

        interval = setInterval(function() {
            counter--;
            // Display 'counter' wherever you want to display it.
            if (counter <= 0) {
                     clearInterval(interval);
                  $('#timeRemain span').text("OUT OF TIME");
                  $('#question-answers button').attr("disabled", "true");
                return;
            }else{
                $('#timeRemain span').text(counter);
            }
        }, 1000);

        questionLoad();
    });

    $('.button-answer').on('click', function(){
        if ($(this).attr("correct") == "yes") {
            $('#wrong-or-right p').html("Correct!");
        } else {
            $('#wrong-or-right p').html("Wrong.");
            counter = counter - 10;

            if (counter < 0) {
                counter = 1;
            }
        }
    });

    $('#next-button').on('click', function(){
        questionLoad();
    });

});