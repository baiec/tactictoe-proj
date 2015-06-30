//0 = scissors     1 = rock     2 = paper
//CHANGE ALL THE ALERTS TO BE 1 ALERT
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
//0 = scissors     1 = rock     2 = paper
function paper(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		alert("The computer chose scissors");
		alert("You lose");
	}
	else if(computerChoice === 1) {
		alert("The computer chose rock");
		alert("You win");
		}
	else if(computerChoice === 2) {
		alert("The computer chose paper");
		alert("You tie");
	}
}
//0 = scissors     1 = rock     2 = paper
function rock(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		alert("The computer chose scissors");
		alert("You win");
	}
	else if(computerChoice === 1) {
		alert("The computer chose rock");
		alert("You tie");
		}
	else if(computerChoice === 2) {
		alert("The computer chose paper");
		alert("You lose");
	}
}