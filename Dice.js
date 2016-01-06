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
/*console.log("your hand total is "+player);*/

function DealersTurn()
    {
    	var total;
    	total=randomDiceRoll();
	if  (total >= 17) 
	    {
		console.log("Dealer Stays");
		return total;
	    } 
	while(total<17) 
	    {
        total=dealCard(total);
		console.log("Dealer Hits");
	    }
	    return total 
	}
	console.log(DealersTurn());

	function bust(number)
	{
		if(number<=20)
		{
				number=true;
		}
		else
		{
            number=false;
		} 
		return number;
	}
/*function randomDiceRoll() {

		var dealerCards = Math.floor((Math.random() * 10));

		return dealerCards;  

	}

	console.log(randomDiceRoll()); 

 

	} 
	console.log(hitDonthit(randomDiceRoll));
*/