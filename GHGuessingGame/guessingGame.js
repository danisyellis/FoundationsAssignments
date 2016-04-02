var playersGuess = 0
var winningNumber
var guessesRemaining = 5;

jQuery(document).ready(function(){
/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.


winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * (101 - 1)) + 1;
}

// Fetch the Players Guess

function playersGuessSubmission(event){
		playersGuess = $("#guess").val();
		$("#guess").val("");
		console.log(playersGuess)
		checkGuess()
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if(Number(playersGuess) === winningNumber) {
		$("h2").text("Winner, winner, chicken dinner!");
		$("h1").text("Winner!");
		$("h1").css({"font-style": "italic", "font-size": "65px", "background-color": "#9900ff"})
	} else if(playersGuess > winningNumber) {
		$("h1").after("<h3>You're too high</h3>")
	} else if(playersGuess < winningNumber) {
		$("h1").after("<h3>Too low!</h3>")
	}	
	guessesRemaining =guessesRemaining - 1;
	showGuessesRemaining();
}

//
function showGuessesRemaining(){
		if(guessesRemaining > 0) {
			$("p").text("You guessed " + playersGuess + " and you have " + guessesRemaining + " guesses remaining.");
		} else {
			$("body").css({"background-color": "red"})
			$("h1").text("You Lost")
		}
}
// Create a provide hint button that provides additional clues to the "Player"

function provideHint() {
	$("h2").before("<h4></h4>")
	$("h4").text(checkHint())
	$("h4").css("color", "#cc3300")
}

function checkHint() {
	if(Math.abs(winningNumber - playersGuess) >= 30) {
			return "You're way off";
		}
		else if(Math.abs(winningNumber - playersGuess) >= 20) {
			return "Your guess is VERY COLD!";
		}
		else if(Math.abs(winningNumber - playersGuess) >= 10) {
			return "You're getting close!";
		}
		else {
			return "Wow, you're so close!";
		}
}

// Allow the "Player" to Play Again

function playAgain(){
	window.location.reload();
}




/* **** Event Listeners/Handlers ****  */

$("#submit").on("click", playersGuessSubmission);

$(document).keypress(function(e) {
    if(e.which == 13) {
        playersGuessSubmission();
    }
});

$("#playAgain").on("click", playAgain);

$("#Hint").on("click", provideHint)


})

