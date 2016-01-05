"use strict";

var player;
var dealer;

function randomDiceRoll()
{
	var num=Math.floor((Math.random() * 10) + 1);
	return num;
}

function dealCard(num)
{
	var newTotalHandValue;
	newTotalHandValue=num+randomDiceRoll();
	return newTotalHandValue;
}
player=dealCard(randomDiceRoll());
console.log("your hand total is "+player);

/*function randomDiceRoll() {

		var dealerCards = Math.floor((Math.random() * 10));

		return dealerCards;  

	}

	console.log(randomDiceRoll()); 

 

	function hitDonthit(total) {


	if (total <= 17) {

		
		console.log("Dealer Stays");
	} else {

		console.log("Dealer Hits"); 
	
	 
	}} 
	console.log(hitDonthit(randomDiceRoll));
*/