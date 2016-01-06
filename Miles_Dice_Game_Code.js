var player1RollAgain;
var rollAgainMessage;
var roll1; 
var roll2; 
 
var firstRollTotal;
var secondRollTotal;  

roll1 = randomDiceRoll();
roll2 = randomDiceRoll();
firstRollTotal = addtwo(roll1, roll2); 
secondRollTotal = addtwo(firstRollTotal, secondRollTotal); 


rollAgainMessage = "Would you like to roll again? Yes or No ";

 function addtwo(number1, number2) {
    var result;
    result = number1 + number2;
    return result;
}

 



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


function firstRoll() { 
	
	while (firstRollTotal < 21) {

		 getUserInput(rollAgainMessage);}

}

	function takePlayerTurn()
    {
    	var total;
    	var hit;
    	total=randomDiceRoll()+randomDiceRoll();
	    hit=prompt("do you want to hit yes or no?");
	    while (hit==="yes")
	    {
	    	total=total+randomDiceRoll;
	    }
	    if (hit==="no")
	    {
	    	return total;
	    }
	    return total;
	}

console.log(takePlayerTurn);
console.log(firstRollTotal);
console.log(firstRoll());



/*function dealCard(num) 
{ var newTotalHandValue;
newTotalHandValue=num=randomDiceRoll();
return newTotalHandValue;
}











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


















	


 


	





