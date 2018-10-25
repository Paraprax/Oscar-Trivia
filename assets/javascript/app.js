$(document).ready(function(){

    console.log("Hello, Newman")

    var quizBox = document.getElementById('quiz');
    var resultsBox = document.getElementById('results');
    var resultsButton = document.getElementById('submit');

    var questionNumbers = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE"];

    var myQuestions = [ // array of all twelve questions, their answer-options and solutions
        {
            question: "Which was the first film to win Best Picture?", //one
            answers: {
                a: 'Wings',
                b: 'Governess Of The Prairie',
                c: 'Stop The Presses!',
                d: 'Dustbowl'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who is the youngest actor ever to win an Oscar?", //two
            answers: {
                a: 'Shirley Temple',
                b: 'Tatum ONeale',
                c: 'Bud Buttons',
                d: 'Felix McGillicuty'
            },
            rightAnswer: 'b'
        },
        {
            question: "Which installment of the Lord Of The Rings Trilogy won Best Picture?", //three
            answers: {
                a: 'The Two Towers',
                b: 'Return Of The King',
                c: 'The Fellowship Of The Ring',
                d: 'The Union Of The West'
            },
            rightAnswer: 'b'
        },
        {
            question: "Who is the oldest actor ever to win an Oscar?", //four
            answers: {
                a: 'Clint Eastwood',
                b: 'Gloria Stuart',
                c: 'Christopher Plummer',
                d: 'Olivia De Havilland'
            },
            rightAnswer: 'c'
        },
        {
            question: "Who has hosted the Oscars more times than anybody else?", //five
            answers: {
                a: 'Billy Crystal',
                b: 'Johnny Carson',
                c: 'Bob Hope',
                d: 'Whoopi Goldberg'
            },
            rightAnswer: 'c'
        },
        {
            question: "Who has the all-time record for most overall Oscars won?", //six
            answers: {
                a: 'Meryl Streep',
                b: 'Steven Spielberg',
                c: 'Abner Swudge',
                d: 'Walt Disney'
            },
            rightAnswer: 'd'
        },
        {
            question: "What was the first film to win in all five 'major' categories(Best Screenplay, Actor, Actress, Director and Picture)?", //seven
            answers: {
                a: "John Steinbeck’s “As Far as the Eye Can See”",
                b: "The Forgotten Tuesday",
                c: 'It Happened One Night',
                d: 'The Man on the Flying Trapeze'
            },
            rightAnswer: 'c'
        },
        {
            question: "What is the most recent film to accomplish the same feat?", //eight
            answers: {
                a: "One Flew Over The Cuckoo's Nest",
                b: "Gorillas In The Mist",
                c: "The Silence Of The Lambs",
                d: "The Dressmaker's Wife"
            },
            rightAnswer: 'c'
        },
        {
            question: "Which was the first year the Oscars were broadcast on television?", //nine
            answers: {
                a: '1953',
                b: '1968',
                c: '1971',
                d: '1983'
            },
            rightAnswer: 'a'
        },
        {
            question: "Who gave the shortest Oscar acceptance speech to date('Thank you.')?", //ten
            answers: {
                a: 'Clark Gable (1934)',
                b: 'Patty Duke (1962)',
                c: 'Marlon Brando (1973)',
                d: 'Joe Pesci (1991)'
            },
            rightAnswer: 'b'
        },
        {
            question: "Which year's Oscar broadcast had the highest ratings(55.25 million viewers)?", //eleven
            answers: {
                a: '1974',
                b: '2005',
                c: '2017',
                d: '1998'
            },
            rightAnswer: 'd'
        },
        {
            question: "Who was the first actor to be nominated for playing a non-human role?", //twelve
            answers: {
                a: "Andy Serkis as Gollum in 'The Lord Of The Rings: The Two Towers'",
                b: "Ray Bolger as the Cowardly Lion in 'The Wizard Of Oz'",
                c: "Jeff Bridges as Starman in 'Starman'",
                d: "Doug Jones as the Amphibian in 'The Shape Of Water'"
            },
            rightAnswer: 'c'
        },
    ];

    function triviaGame(questions, quizBox, resultsBox, resultsButton){ // overarching function that builds the game via child functions


        function showQuestions(questions, quizBox){ // function that populates the quizBox with functional q&a's

            var output = [];
            var answers;

            
            for (var i = 0; i < questions.length; i++) { // loops through each object in the var 'questions' array

                
                answers = []; // sets the answers var to an empty array

                
                for(letter in questions[i].answers){ // loop for each hard-coded answer per question...

                    
                    answers.push // creates a radio button and pushes it to the answers array
                    (
                        '<label>'
                            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                            + letter + ': '
                            + questions[i].answers[letter]
                        + '</label>'
                    );
                }
                
                // bigger loop finishes by adding this question and its answers to the output
                output.push
                (
                    '<div class="question">' + '<div class="questionNumber"><h6>QUESTION ' + questionNumbers[i] + '</h6></div>' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );

            }

            // add the output as HTML to the 'quiz' div targeted by the 'quizBox' var 
            quizBox.innerHTML = output.join('');
        } // end of showQuestions

        function showResults(questions, quizBox, resultsBox){ // function that computes the score, styles the answers based on right/wrong, and displays the resulting score

            // gather answer containers from our quiz
            var answerContainers = quizBox.querySelectorAll('.answers');
            
            // keep track of user's answers
            var userAnswer = '';

            var numCorrect = 0;

            // for each question...
	        for(var q=0; q<questions.length; q++){

                // find selected answer
                userAnswer = (answerContainers[q].querySelector('input[name=question'+q+']:checked')||{}).value;
                
                // if answer is correct
                if(userAnswer === questions[q].rightAnswer)
                {
			    // add to the number of correct answers
                numCorrect++;
                // color the answers green
                answerContainers[q].style.color = 'gold';
                }
                // if answer is wrong or blank
                else
                {
                // color the answers red
                answerContainers[q].style.color = 'red';
                }
            }

            // show number of correct answers out of total
            resultsBox.innerHTML = numCorrect + ' out of ' + questions.length;
            
            console.log("results");
        
        } //end of showResults function


        showQuestions(questions, quizBox); //function call	

        resultsButton.onclick = function(){ //showResults function called on button-click
            showResults(questions, quizBox, resultsBox);
        }

       // setTimeout(showResults(questions, quizBox, resultsBox), 10000); //can't figure out why this is running with no time-delay
        
    } //end of triviaGame

    $("#start-button").on("click", function(){
        triviaGame(myQuestions, quizBox, resultsBox, resultsButton); //parent function called at docready
    });

}); // end of docready function