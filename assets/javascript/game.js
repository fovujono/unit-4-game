//used to load document correctly
$(document).ready(function () {

    //Target Number
    var targetNumber = 120;

    $("#randomNumberParagraph").text(targetNumber);
    // counting the number of doughnuts 
    var counter = 0;

    // Code that selects a one of the numbers in an array
    var numberOptions= [10,5,3,7];
    
    var increment = numberOptions[Math.round(Math.random())];
     $("#d1").on("click", function () {


        counter += increment;

        alert("Your score is " + counter + " doughnuts!");

        //winning condition
        if (counter === targetNumber) {
            alert("You Win :)")

        }
        //losing condition
        else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
        }

    })

});