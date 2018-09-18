//used to load document correctly
$(document).ready(function () {

    //Target Number
    var targetNumber = Math.floor(Math.random() * (120 - 20 + 1)) +20;

    $("#randomNumberParagraph").html(targetNumber); 

    // counting the number of Current Doughnuts 
    var counter = 0;
    var victory = 0;
    var defeat = 0;

    // Code that selects a one of the numbers in an array
    var numberOptions = [1, 5, 3, 7];

    var random = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    console.log(random)
    $("#d1").on("click", function () {
        counter += random;
        winLoss();
        document.getElementById('yourScoreNumber').innerHTML = "Your Current Doughnuts " + counter;//updates current score in html
        //winning condition
        if (counter === targetNumber) {
            alert("You Win :)")
            reset();
        }
        //losing condition
        else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
            reset();
        }
    })
    // doing same thing but for rest of the doughnut images. 
    var numberOptions2 = [20, 10, 12, 8];
    var random2 = numberOptions2[Math.floor(Math.random() * numberOptions2.length)];
    console.log(random2)
    $("#d2").on("click", function () {
        counter += random2;
        winLoss();
        document.getElementById('yourScoreNumber').innerHTML = "Your Current Doughnuts " + counter;  
    
        if (counter === targetNumber) {
            alert("You Win :)")
            reset();

        } else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
            reset();
        }
    });

    var numberOptions3 = [3, 1, 7, 5];
    var random3 = numberOptions3[Math.floor(Math.random() * numberOptions3.length)];
    console.log(random3)
    $("#d3").on("click", function () {
        counter += random3;
        winLoss();
        document.getElementById('yourScoreNumber').innerHTML = "Your Current Doughnuts " + counter;  

        if (counter === targetNumber) {
            alert("You Win :)")
            reset();

        } else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
            reset();
        }
    });
    var numberOptions4 = [6, 8, 4, 2];
    var random4 = numberOptions4[Math.floor(Math.random() * numberOptions4.length)];
    console.log(random4)
    $("#d4").on("click", function () {
        counter += random4;
        winLoss();
        document.getElementById('yourScoreNumber').innerHTML = "Your Current Doughnuts " + counter;  

        if (counter === targetNumber) {
            alert("You Win :)")
            reset();
        } else if (counter >= targetNumber) {
            alert("You Lose! LOSER!");
            reset();
        }
    });
    //updates victories and losses
    var winLoss = function (){
        if(counter === targetNumber){
        victory++;
        $("#victories").html(victory);
    }
    else if(counter >= targetNumber)
    defeat++;
    $("#defeats").html(defeat);
};
function reset() {
counter = 0
targetNumber = Math.floor(Math.random() * (120 - 20 + 1)) +20;
$("yourScoreNumber").html(counter);
$("#randomNumberParagraph").html(targetNumber); 
        
}


});

