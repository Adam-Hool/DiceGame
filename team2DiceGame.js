"use strict";

var player;
var dealer;
var rollAgainMessage;
rollAgainMessage = "Would you like to roll again? Yes or No ";

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
	    hit=prompt(rollAgainMessage);
	    while (hit==="yes")
	    {
	    	total=total+randomDiceRoll;
	    	console.log(total)
	    	hit=prompt(rollAgainMessage);
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
            if (house>=player)
            {
            	console.log(dealerWinMessage);
            }
		}
		else if(bust(player)===false)
		{
			if(me>dealer)
			{
				console.log(playerWinMessage);
			}
		}
	}
	player=takePlayerTurn();
	dealer=DealersTurn();
    console.log(player+"player's value");
    
	console.log(dealer);
	checkWhoWon(player,dealer)
