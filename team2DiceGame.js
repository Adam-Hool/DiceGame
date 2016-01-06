"use strict";

var player;
var dealer;
var rollAgainMessage;
rollAgainMessage = "Would you like to roll again? Yes or No ";

function getUserInput(message)
{
	var userInput;
	userInput = prompt(message);
	return userInput;	
}

function randomDiceRoll()
{
	var num=Math.floor((Math.random() * 10) + 1);
	return num;
}

function rollDice(num)
{
	var newTotalHandValue;
	newTotalHandValue=num+randomDiceRoll();
	return newTotalHandValue;
}
player=rollDice(randomDiceRoll());
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
        total=rollDice(total);
		console.log("Dealer Hits");
	    }
	    return total 
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

	function bust(number)
	{
		if(number<=20)
		{
				number=false;
		}
		else
		{
            number=true;
		} 
		return number;
	}

	function checkWhoWon(me,house)
	{
		var dealerWinMessage;
		var playerWinMessage;
		house=dealer;
		me=player;
		dealerWinMessage="Dealer wins!";
		playerWinMessage="player wins!";
		if(bust(house)===false)
		{
            if (dealer>=player)
            {
            	console.log(dealerWinMessage);
            }
		}
		else if(bust(player)===false)
		{
			if(player>dealer)
			{
				console.log(playerWinMessage);
			}
		}
	}
	dealer=DealersTurn();
    console.log(takePlayerTurn);
    
	console.log(DealersTurn());
/*function randomDiceRoll() {

		var dealerCards = Math.floor((Math.random() * 10));

		return dealerCards;  

	}

	console.log(randomDiceRoll()); 

 

	} 
	console.log(hitDonthit(randomDiceRoll));
*/