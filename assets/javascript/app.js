console.log("Hello, Newman")

$(document).ready(function(){

    console.log("Hello, Newman")

    var quizContainer = document.getElementById('quiz');

    var questionNumbers = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE"];

    var myQuestions = [
        {
            question: "Which was the first film to win Best Picture?",
            answers: {
                a: 'Wings',
                b: 'Governess Of The Prairie',
                c: 'Stop The Presses!',
                d: 'Dustbowl'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who is the youngest actor to win an Oscar?",
            answers: {
                a: 'Shirley Temple',
                b: 'Tatum ONeale',
                c: 'Bud Buttons',
                d: 'Felix McGillicuty'
            },
            rightAnswer: 'b'
        },
        {
            question: "Which was the first film to win Best Picture?",
            answers: {
                a: 'Wings',
                b: 'Governess Of The Prairie',
                c: 'Stop The Presses!',
                d: 'Dustbowl'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who is the youngest actor to win an Oscar?",
            answers: {
                a: 'Shirley Temple',
                b: 'Tatum ONeale',
                c: 'Bud Buttons',
                d: 'Felix McGillicuty'
            },
            rightAnswer: 'b'
        },
        {
            question: "Which was the first film to win Best Picture?",
            answers: {
                a: 'Wings',
                b: 'Governess Of The Prairie',
                c: 'Stop The Presses!',
                d: 'Dustbowl'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who is the youngest actor to win an Oscar?",
            answers: {
                a: 'Shirley Temple',
                b: 'Tatum ONeale',
                c: 'Bud Buttons',
                d: 'Felix McGillicuty'
            },
            rightAnswer: 'b'
        },
        {
            question: "Which was the first film to win Best Picture?",
            answers: {
                a: 'Wings',
                b: 'Governess Of The Prairie',
                c: 'Stop The Presses!',
                d: 'Dustbowl'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who is the youngest actor to win an Oscar?",
            answers: {
                a: 'Shirley Temple',
                b: 'Tatum ONeale',
                c: 'Bud Buttons',
                d: 'Felix McGillicuty'
            },
            rightAnswer: 'b'
        },
        {
            question: "Which was the first film to win Best Picture?",
            answers: {
                a: 'Wings',
                b: 'Governess Of The Prairie',
                c: 'Stop The Presses!',
                d: 'Dustbowl'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who is the youngest actor to win an Oscar?",
            answers: {
                a: 'Shirley Temple',
                b: 'Tatum ONeale',
                c: 'Bud Buttons',
                d: 'Felix McGillicuty'
            },
            rightAnswer: 'b'
        },
        {
            question: "Which was the first film to win Best Picture?",
            answers: {
                a: 'Wings',
                b: 'Governess Of The Prairie',
                c: 'Stop The Presses!',
                d: 'Dustbowl'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who is the youngest actor to win an Oscar?",
            answers: {
                a: 'Shirley Temple',
                b: 'Tatum ONeale',
                c: 'Bud Buttons',
                d: 'Felix McGillicuty'
            },
            rightAnswer: 'b'
        },
    ];

    function generateQuiz(questions, quizContainer){


        function showQuestions(questions, quizContainer){

            var output = [];
            var answers;

            // loop through each object in the var questions array
            for (var i = 0; i < questions.length; i++) {

                // reset the list of answers
                answers = [];

                // for each available answer to this question...
                for(letter in questions[i].answers){

                    // ...add an html radio button
                    answers.push
                    (
                        '<label>'
                            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                            + letter + ': '
                            + questions[i].answers[letter]
                        + '</label>'
                    );
                }
                
                // add this question and its answers to the output
                output.push
                (
                    '<div class="question">' + '<div class="questionNumber"><h6>QUESTION ' + questionNumbers[i] + '</h6></div>' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );

            }

            // finally combine our output list into one string of html and put it on the page
            quizContainer.innerHTML = output.join('');
        }
        
        showQuestions(questions, quizContainer);

    }

    generateQuiz(myQuestions, quizContainer);

 
}); // end of docready function