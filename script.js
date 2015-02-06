var randomNumber = 0;

//start new game and pick a new randomly generated number
function new_game (){
	randomNumber = Math.floor(Math.random() * 100) + 1;
}



//compare number function
function compare_number (num){
	if(num === randomNumber){
		alert("You got it!");
		} else if (num > randomNumber) {
			alert("You're too high!");
		} else if (num < randomNumber) {
			alert("You're too low!");
		}
	}
};

//end the game and reveal the number
function i_give_up (){
	alert("Sorry you lost! The number was " + randomNumber + ".");
}

function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}