var randomScore;
var rollAgainMessage;


rollAgainMessage = "Would you like to roll again? Yes or No ";
 
randomScore = Math.floor((Math.random() * 10) + 1);

function totalScore(score) {
	score = twoRolls() + randomDiceRoll();
	return score; 

}

function rollDice(num)
{
	var newTotalHandValue;
	newTotalHandValue=num+randomDiceRoll();
	return newTotalHandValue;
}

function randomDiceRoll() {
    var num=Math.floor((Math.random() * 10) + 1);
    return num;
	}


function twoRolls(roll1, roll2, totalScore) {
   

    
    roll1 = randomScore;
    roll2 = randomScore; 
    totalScore = roll1 + roll2; 
    return totalScore;
}


function getUserInput(message) {

	var userInput;
	userInput = prompt(message);
	return userInput;	
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
 


function dealersTurn()
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
		console.log("Dealer Hits:" + " Dealer's total is " + total);
	    }
	    return total 
	}

	function takePlayerTurn() {
       var total;
       var hit;


       total=randomDiceRoll()+randomDiceRoll();
        hit=prompt(rollAgainMessage);
        while (hit !== "no")
        {
            total=total+randomDiceRoll();
            console.log("player's current total is ", total);
            hit=prompt(rollAgainMessage);
        }

        return total;
    }

    function checkWhoWon(player, dealer) {

    	dealer = dealersTurn();
    	player = takePlayerTurn();

    	if (dealer > 20) {

    		console.log("Dealer Bust. You Win");

    		}else if (player > 21) {

    			console.log("You Bust. Dealer Wins");
    		}  else if (dealer < player) {

    		console.log("You Win!");

    		}else { 
    			console.log("Dealer Wins");
    		}
    	}


    


    	    
	
   
checkWhoWon();


console.log(takePlayerTurn());
console.log(dealersTurn());











