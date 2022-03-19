let select = document.querySelectorAll(".select");
let editCall = document.querySelectorAll(".editCall");
let result;
let coinToss;
let playerCoin;
let computerCoin;
let scoreOfPlayer = 0;
let scoreOfComputer = 0;
let Head = 'Head';
let Tail = "Tail";
function selectButton(val){
	let randomValue = Math.floor(Math.random() * 2);
	console.log(randomValue)
	if(val == 0){
	playerCoin = Head;
	computerCoin = Tail;
	playerSelect.innerHTML = `Player : ${playerCoin}`;
	computerSelect.innerHTML = `Computer : ${computerCoin}`;	
	}
	if(randomValue == 0){
		coinToss = true;
	}
	if(randomValue == 1){
		coinToss = false;
	}
	if(val != 0){
	playerCoin = Tail;
	computerCoin = Head;
	playerSelect.innerHTML = `Player : ${playerCoin}`;
	computerSelect.innerHTML = `Computer : ${computerCoin}`;
	}
	for(let y of select){
		y.style.display = 'none';
	}
	for(let y of editCall){
		y.style.display = 'block';
	}
};
function editBtn(val){
	if(val == 1){
		confirm();
	}
	else{
		reset();
	}
}
function reset(){
	for(let y of select){
		y.style.display = 'block';
	}
	for(let y of editCall){
		y.style.display = 'none';
	};
};

function confirm(val){
roundWinner.innerHTML =''	
	info.innerHTML = "Toss is in progress";
	flipVideo.src = "coinFlip.mp4";
	main.innerHTML = ''
	for(let y of editCall){
		y.style.display = 'none'
	}
	flipVideo.play();
	setTimeout(() => {
		flipVideo.src = "";
		reset();
		if(coinToss){
			result = Head;
			main.innerHTML = result;
		}
		else{
			result = Tail;
			main.innerHTML = result;
		};
		let timeout = setTimeout(() => {
		playerSelect.innerHTML = "Player :";
		computerSelect.innerHTML = "computer :";
		info.innerHTML = "Make Your Selection";
		}, 100);
	
		if(result == playerCoin){
		scoreOfPlayer += 1;
		playerScore.innerHTML = `Player Score: ${scoreOfPlayer}`;
		computerScore.innerHTML = `Computer Score: ${scoreOfComputer}`;
		roundWinner.innerHTML = 'You Win !!'
}
	if(result == computerCoin){
		scoreOfComputer += 1;	
		playerScore.innerHTML = `Player Score: ${scoreOfPlayer}`;
		computerScore.innerHTML = `Computer Score: ${scoreOfComputer}`;
		roundWinner.innerHTML = 'Computer Win !!'
};
	}, 3000);

};

setInterval(() => {
	if(scoreOfPlayer == 5){
			info.innerHTML = "You Win !!";
			newGame.style.display = 'block';
			for(let i of select){
			i.style.display = 'none'
		}
	}
	else if(scoreOfComputer == 5){
			info.innerHTML = "Computer Win !!";
			newGame.style.display = 'block';
			for(let i of select){
			i.style.display = 'none'
		}
	};
}, 100)
newGame.addEventListener("click", () => {
		scoreOfPlayer = 0;
		roundWinner.innerHTML =''
		info.innerHTML = "Make Your Selection";
		newGame.style.display = 'none'
		scoreOfComputer = 0;
		playerScore.innerHTML = `Player Score: ${scoreOfPlayer}`;
		computerScore.innerHTML = `Computer Score: ${scoreOfComputer}`;
		for(let i of select){
			i.style.display = 'block'
		}
})