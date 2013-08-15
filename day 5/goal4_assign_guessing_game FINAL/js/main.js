/**
 * Created by the JavaScript team at FullSail
 * Date: 1304
 */

//Game variables
(function (){
    
    var playersGuess = 0;
    var guessesRemaining = 3;
    var guessesMade = 0;

    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };

    //the random will be a decimal number so we * by 10, the floor (to round up)
    //  the 1 at the end says to start at 1
    var magicNum = Math.floor(Math.random() * 10 + 1); 


    var clickFn = function(e){
        console.log(guessesRemaining);
        validateInput();
    };


    var validateInput = function(){
        playersGuess = parseInt(dom.input.value);

        if (isNaN(playersGuess)){    //check for proper datatype
            dom.output.innerHTML = "Please enter a number.";
        
        //This is NOT a required item but is a nice to have.
        }else if(playersGuess < 1 || playersGuess > 10){
            dom.output.innerHTML = "Please enter a number between 1 and 10.";

        }else{    
            playGame();
        };
    };


    var playGame = function(){
        guessesRemaining--;
        guessesMade++;
        gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
        playersGuess = parseInt(input.value);

        if(playersGuess > magicNum){
            dom.output.innerHTML = "That's too high." + gameState;
        
        }else if(playersGuess < magicNum){
            dom.output.innerHTML = "That's too low." + gameState;
        
        //Check for game over
        }else if(playersGuess === magicNum){
            gameOver(true);
        };

        if(guessesRemaining < 1){
            console.log("Game Over : guessesRemaining is < 1");
            gameOver(false);
        };
    };


    var gameOver = function(win){
        
        if (win){
            dom.output.innerHTML
                = "Yes, it's " + magicNum + "!" + "<br>"
                + "It only took you " + guessesMade + " guesses.";
        }else{
            dom.output.innerHTML
                = "No more guesses left!" + "<br>"
                + "The number was: " + magicNum + ".";
        };

    //Disable the Button OPTIONS
        //Option 1: Disable the button addEventListner => removeEventListner
        dom.button.removeEventListener("click", clickFn, false);

        //Option 2: Disable the button w/o removeEventListner
        //dom.button.disabled = true;

        //Option 3: Disable the input field (needed with Option 2)
        //dom.input.disabled = true;


        //window.removeEventListener("keydown", onKeyDown, false);        
    }


    var onKeyDown = function(e){
    
        if(e.keyCode === 13){
            validateInput();
        };
    };


console.log(magicNum);

//addEventLister method
dom.button.addEventListener("click", clickFn, false);
    
//onclick method
//button.onclick = clickFn; 

//Listen for enter key presses
window.addEventListener("keydown", onKeyDown, false);

})();