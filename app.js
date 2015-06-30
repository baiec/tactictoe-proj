//0 = scissors     1 = rock     2 = paper
var playerScore = 0;
var compScore = 0;
function scissors(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		document.getElementById("displayResult").innerHTML = "The computer chose scissors, and it's a tie!";
	}
	else if(computerChoice === 1) {
		document.getElementById("displayResult").innerHTML = "The computer chose rock, and you lose!";
		compScore++;
		document.getElementById("disCompScore").innerHTML = compScore;
		}
	else if(computerChoice === 2) {
		document.getElementById("displayResult").innerHTML = "The computer chose paper, and you win!";
		playerScore++;
		document.getElementById("disPlayerScore").innerHTML = playerScore;
	}
}
function paper(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		document.getElementById("displayResult").innerHTML = "The computer chose scissors, and you lose!";
		compScore++;
		document.getElementById("disCompScore").innerHTML = compScore;
	}
	else if(computerChoice === 1) {
		document.getElementById("displayResult").innerHTML = "The computer chose rock, and you win!";
		playerScore++;
		document.getElementById("disPlayerScore").innerHTML = playerScore;
		}
	else if(computerChoice === 2) {
		document.getElementById("displayResult").innerHTML = "The computer chose paper, and you tie!";
	}
}
function rock(){
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		document.getElementById("displayResult").innerHTML = "The computer chose scissors, and you win!";
		playerScore++;
		document.getElementById("disPlayerScore").innerHTML = playerScore;
	}
	else if(computerChoice === 1) {
		document.getElementById("displayResult").innerHTML = "The computer chose rock, and you tie!";
		}
	else if(computerChoice === 2) {
		document.getElementById("displayResult").innerHTML = "The computer chose paper, and you lose!";
		compScore++;
		document.getElementById("disCompScore").innerHTML = compScore;
	}
}