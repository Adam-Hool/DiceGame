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
	console.log(DealersTurn());
/*function randomDiceRoll() {

		var dealerCards = Math.floor((Math.random() * 10));

		return dealerCards;  

	}

	console.log(randomDiceRoll()); 

 

	} 
	console.log(hitDonthit(randomDiceRoll));
*/