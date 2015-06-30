//0 = scissors     1 = rock     2 = paper
var playerScore = 0;
var compScore = 0;
function scissors(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		alert("The computer chose scissors, and it's a tie!");
	}
	else if(computerChoice === 1) {
		alert("The computer chose rock, and you lose!");
		}
	else if(computerChoice === 2) {
		alert("The computer chose paper, and you win!");
	}
}
function paper(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		alert("The computer chose scissors, and you lose!");
	}
	else if(computerChoice === 1) {
		alert("The computer chose rock, and you win!");
		}
	else if(computerChoice === 2) {
		alert("The computer chose paper, and you tie!");
	}
}
function rock(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		alert("The computer chose scissors, and you win!");
	}
	else if(computerChoice === 1) {
		alert("The computer chose rock, and you tie!");
		}
	else if(computerChoice === 2) {
		alert("The computer chose paper, and you lose!");
	}
}