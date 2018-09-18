//used to load document correctly
$(document).ready(function () {

    //Target Number
    var targetNumber = 120;

    $("#randomNumberParagraph").text(targetNumber);
    // counting the number of doughnuts 
    var counter = 0;
    var victory = 0;
    var defeat = 0;

    // Code that selects a one of the numbers in an array
    var numberOptions = [1, 5, 3, 7];

    var random = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    console.log(random)
    $("#d1").on("click", function () {
        counter += random;
        score();
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
    // doing same thing but for rest of the doughnut images. 
    var numberOptions2 = [20, 10, 12, 8];
    var random2 = numberOptions2[Math.floor(Math.random() * numberOptions2.length)];
    console.log(random2)
    $("#d2").on("click", function () {
        counter += random2;
        score();
        alert("Your score is " + counter + " doughnuts!");

        if (counter === targetNumber) {
            alert("You Win :)")

        } else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
        }
    });

    var numberOptions3 = [3, 1, 7, 5];
    var random3 = numberOptions3[Math.floor(Math.random() * numberOptions3.length)];
    console.log(random3)
    $("#d3").on("click", function () {
        counter += random3;
        score();
        alert("Your score is " + counter + " doughnuts!");

        if (counter === targetNumber) {
            alert("You Win :)")

        } else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
        }
    });
    var numberOptions4 = [6, 8, 4, 2];
    var random4 = numberOptions4[Math.floor(Math.random() * numberOptions4.length)];
    console.log(random4)
    $("#d4").on("click", function () {
        counter += random4;
        score();
        alert("Your score is " + counter + " doughnuts!");

        if (counter === targetNumber) {
            alert("You Win :)")

        } else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
        }
    });
    var score = function (){
        victory++;
        $("#victories").html(victory+1)
};

});

