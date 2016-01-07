"use strict";

var player;
var dealer;
var rollAgainMessage;
rollAgainMessage = "Would you like to roll again? yes or no ";

function userInput(){
	var namePrompt;
	namePrompt = prompt ("Enter your name", "");
     inputCheck(namePrompt)
    return namePrompt;
}
function inputCheck(namePrompt){
        if (namePrompt.length > 0)
        	{return namePrompt;
        } else if (namePrompt.length === 0)
            {userInput();};	
}

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
/*player=rollDice(randomDiceRoll());*/

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
	return total; 
	}

function takePlayerTurn()
    {
    	var total;
    	var hit;
    	total=randomDiceRoll()+randomDiceRoll();
    	console.log("player's current total is ", total);
	    hit=prompt(rollAgainMessage);
	    while (hit !== "no")
	    {
	    	total=total+randomDiceRoll();
	    	console.log("player's current total is ", total);
	    	hit=prompt(rollAgainMessage);
	    }
	    return total;
	}

	function bust(number)
	{
		var toHeigh;
		if(number<=20)
		{
				toHeigh=false;
		}
		else
		{
            toHeigh=true;
            console.log("you busted")
		} 
		return toHeigh;
	}

	function checkWhoWon(me,house)
	{
		var dealerWinMessage;
		var playerWinMessage;
		dealerWinMessage="Dealer wins!";
		playerWinMessage="player wins!";
		if(bust(house)===false)
		{
            if (house>=me)
            {
            	console.log(dealerWinMessage);
            }
		}
		else if(bust(me)===false)
		{

			if(me>house)
			{
				console.log(playerWinMessage);
			}
		}
	}
	player=takePlayerTurn();
	dealer=DealersTurn();
    console.log("player's value is "+player);
    
	console.log("dealer's value is "+dealer);
	checkWhoWon(player,dealer)
