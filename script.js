//Function takes user input and compares number to numToGuess
var turn = 0;
var guessesArr = [];
var newGuessSwitch = false;
var newGuess;
var userWonGame = false;

function yourGuess() {
    if (newGuessSwitch === true){
    	guess = newGuess;
    	newGuessSwitch = false;
    } else {
    	guess = document.getElementById("guess").value;
    }

    guesses = document.getElementById("output");

//Check to see if answer was already submitted (if the guess array has at least one entry)
	if (guessesArr.length > 0 && guessesArr.indexOf(guess) > -1){
		
		alertify.prompt("You have already guessed "+guess+". Please pick another number.", function (ee, str) {
			if (ee) {
				newGuess = str;
				newGuessSwitch = true;
				yourGuess();

				} else {
					//user clicked "cancel"
				}
		}, "New guess");		
	} else {

//Turn counter
	turn++;

//Checks to make sure input is a number 1 and 100
    if(isNaN(guess) || guess < 1 || guess > 100){
    	alertify.alert(guess+" is not a number between 1 and 100! Please guess again.");
    } else {

//store guess in guessArr
		guessesArr.push(guess);

//if numbers match    	
	    if (guess == numToGuess) {
	        guesses.value = guesses.value + "\r" + "("+guess+") is the right number! ";
	        userWonGame = true;
	        document.getElementById("jumbo").style.backgroundColor = "green";
	        alertify.confirm("Congrats you picked the right number "+numToGuess+"! Click OK to play again.", function(e){
	        	if (e){	        			        		
	        			location.reload();	        			
	        		}
	        	});
		    } 

//guess is greater than hidden number
		    else if (guess > numToGuess && Math.abs(parseInt(guess - numToGuess)) > 30) {
		        guesses.value = guesses.value + "\r" + "You're way off. ("+guess+") is far too high! (Turn "+turn+").";
		    } 

		    else if (guess > numToGuess && Math.abs(parseInt(guess - numToGuess)) > 15) {
		        guesses.value = guesses.value + "\r" + "You're getting warmer, but ("+guess+") is too high! (Turn "+turn+").";
		    } 

		    else if (guess > numToGuess && Math.abs(parseInt(guess - numToGuess)) > 5) {
		        guesses.value = guesses.value + "\r" + "You're getting hotter! ("+guess+") is a bit too high! (Turn "+turn+").";
		    } 

		    else if (guess > numToGuess && Math.abs(parseInt(guess - numToGuess)) < 6) {
		        guesses.value = guesses.value + "\r" + "You're so close! ("+guess+") is a teeny bit too high! (Turn "+turn+").";
		    } 

//guess is less than hidden number
		   	else if (guess < numToGuess && Math.abs(parseInt(guess - numToGuess)) > 30) {
		        guesses.value = guesses.value + "\r" + "You're way off. ("+guess+") is far too low! (Turn "+turn+").";
		    } 

		    else if (guess < numToGuess && Math.abs(parseInt(guess - numToGuess)) > 15) {
		        guesses.value = guesses.value + "\r" + "You're getting warmer, but ("+guess+") is too low! (Turn "+turn+").";
		    } 

		    else if (guess < numToGuess && Math.abs(parseInt(guess - numToGuess)) > 5) {
		        guesses.value = guesses.value + "\r" + "You're getting hotter! ("+guess+") is a bit too low! (Turn "+turn+").";
		    } 

		    else if (guess < numToGuess && Math.abs(parseInt(guess - numToGuess)) < 6) {
		        guesses.value = guesses.value + "\r" + "You're so close! ("+guess+") is a teeny bit too low! (Turn "+turn+").";
		    } 
		}
	}


		
//Alert and end game if player uses 5 turns
		if (turn === 5 && userWonGame === false){
			document.getElementById("jumbo").style.backgroundColor = "red";
			alertify.confirm("Sorry, you are out of turns! The number was "+numToGuess+".", function (youLose){
				if (youLose){
					location.reload();
				}
			});					
		}
	}

//Cheat function gives user the hidden number
function showNumberToGuess() {
    if (document.getElementById('cheat')) {
        document.getElementById('numberToGuess').value = numToGuess;
        document.getElementById('cheatShow').style.display = 'inline';
    } else {
        document.getElementById('numberToGuess').value = '';
        document.getElementById('cheatShow').style.display = 'none';
    }
}

//"New game" button alerts user and reloads page
function newGame () {
	alertify.confirm("Click OK to start a new game.", function (newGameConfirm){
		if (newGameConfirm){
			location.reload();
			}
		});	
}

//Random number generator (1-100)
var numToGuess = Math.floor(Math.random()*100);








