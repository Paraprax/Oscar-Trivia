console.log("Hello, Newman")

$(document).ready(function(){

    console.log("Hello, Newman")

    function getAnswer(){
        // Get the selected score (assuming one was selected)
        var answer = document.querySelector('input[name="scores"]:checked').value;
        alert(score + ' was selected!');
    }
   
    function buildQuiz(questions, quizContainer, resultsContainer, submitButton){

        function showQuestions(questions, quizContainer){
            // code will go here
        }
    
        function showResults(questions, quizContainer, resultsContainer){
            // code will go here
        }
    
        // show the questions
        showQuestions(questions, quizContainer);
    
        // when user clicks submit, show results
        $('#results').on("click", function() {
            showResults(questions, quizContainer, resultsContainer);
        });
    }
























});