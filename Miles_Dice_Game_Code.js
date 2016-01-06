var player1RollAgain;
var rollAgainMessage;
var total;
total = dealCard();
rollAgainMessage = "Would you like to roll again? Yes or No ";


function getUserInput(message) {
	var userInput;
	userInput = prompt(message);
	return userInput;	
}

 function randomDiceRoll()
 { 
 	var num= Math.floor((Math.random() * 10 + 1));
 	return num;
 }



function dealCard(num) 
{ var newTotalHandValue;
newTotalHandValue=num=randomDiceRoll();
return newTotalHandValue;
}



function rollagain() { 

	while (dealCard() < 21) {

	 getUserInput(rollAgainMessage);

	} }



console.log(dealCard());










/*var total;
var player1RollAgain;
var rollAgainMessage;

rollAgainMessage = "Would you like to roll again? Yes or No ";


total = playerTurn1(firstRoll, secondRoll);
console.log(total);

function getUserInput(message) {
	var userInput;
	userInput = prompt(message);
	return userInput;	
}


while (total < 21) {

	getUserInput(rollAgainMessage);*/

















/*function randomDiceRollOneandTwo(rollOne, rollTwo) {


		
		var rollOne = Math.floor((Math.random() * 10 + 1));

		var rollTwo = Math.floor((Math.random() * 10 + 1));

		var totalRoll = rollOne + rollTwo; 
		

		return totalRoll; 

		 }

		 function randomDiceRollThree(rollThree) {

		 	var rollThree = Math.floor((Math.random() * 10 + 1));

		 if  (randomDiceRollOneandTwo() <= 17) {

		 	console.log("Dealer Hits"); 

		 	var rollThree = randomDiceRollThree() + rollThree; 


		 	return rollThree; 

		 }else{

		 	console.log("Dealer Stays");
		  }}
	




console.log(randomDiceRollThree());*/


















	


 


	





