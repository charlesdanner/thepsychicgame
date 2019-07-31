//array of letters computer can choose
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for scoring. start at zero but will incrimentallly increase except guessesLeft which will decrease
var wins = 0;
var losses = 0;
var guessesLeft = 9;




function populateUnderScore(hangmanWord){
    if (hangmanWord === "OUTLAW"){
        randomWordText === ["_ " + "_ " + "_ " + "_ " + "_ " + "_ " + "_ " + "_"];
        return 
    }

    if( hangmanWord ==="REVOLVER"){
        randomWordText === ["_ " + "_ " + "_ " + "_ " + "_ " + "_ " + "_ " + "_"];
        return
    }

    if (hangmanWord === "SALOON"){
        randomWordText === ["_ " + "_ " + "_ " + "_ " + "_ " + "_"]
    }

}













//empty array that will be populated for guesses user has made. will need to be populated and reset
var guessesSoFar =[];

//variables that hold references to what is written on the html document. this is for updating the scores and guesses.
var directionsText = document.getElementById("direction-text");
var userGuessText = document.getElementById("guesses-left-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-made-text");


var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//runs when user presses a key

document.onkeyup = function(event){
    //computer randomly selects a number. number refers to the array with letters of alphabet to select a letter.
    
    
    //user's guess is the key that is pressed
    var userGuess = event.key

    function reset(){
        guessesSoFar = []
        guessesLeft = 9;
        computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    //if computer and user have same letter selected, user wins and wins are incremented.
    if (userGuess === computerLetter)
        {wins++;
        reset()
    
    //if user guess does not equal computer guess, push guess into userGuess value into guessesSoFar array.
    // reduce the number of guesses by one.  
    }  else if (userGuess !== computerLetter){
        (guessesSoFar.push(userGuess));
        guessesLeft--;

        //when doing else if if the guessesLeft === 0 then add a loss, reset the guessesSoFar array and repopulate the guesses left number.
            if (guessesLeft === 0){
                losses++;
                reset()

            }

        }

    //display text/wins/losses
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    userGuessText.textContent = "Guesses Left: " + guessesLeft;
    guessesText.textContent = "Letters Guessed: " + guessesSoFar;



    
        

}