/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.
//create random number 0 - 36
var on = true;
var myBotton = document.getElementById('btn')
myBotton.addEventListener('click', controlIt);
var showElem = document.getElementById('show');
var random;
function randomNum(){
	var randomN = Math.floor(Math.random() * 36);
	console.log(randomN)
	showElem.innerHTML = randomN;
	if(randomN === 0){
		document.body.style.backgroundColor = 'green';
		document.body.style.color = 'white';
	}else if(randomN % 2 === 0){
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
	}else{
		document.body.style.backgroundColor = "red";
		document.body.style.color = "white";
	}

}
function controlIt(){
	if(!on){
		on = true;
		random = setInterval(randomNum, 500);
		myBotton.innerHTML = 'Stop';
	}else{
		on = false;
		clearInterval(random);
		myBotton.innerHTML = 'Start';
	}
}