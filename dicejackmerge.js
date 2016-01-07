var randomScore;
var rollAgainMessage;
var player1;
player1 = userInput(); 


rollAgainMessage = "Would you like to roll again? Yes or No ";
 
randomScore = Math.floor((Math.random() * 10) + 1);

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
       console.log(player1.toUpperCase() +":" + " ROLL 1 AND ROLL 2 = " + total);
        hit=prompt(rollAgainMessage);
        while (hit !== "no")
        {
            total=total+randomDiceRoll();
            console.log(player1.toUpperCase() +":" + " NEW TOTAL IS: ", total);
            hit=prompt(rollAgainMessage);
        }

        return total;
    }

         function rePlay(){
    var play;
    play = prompt ("Do you want to play again? yes or no");
        if (play === "yes") {
            main()
        }else if (play === "no"){
            console.log("Thank you for playing ");
        };
}

    function checkWhoWon(player, dealer) {

        player = takePlayerTurn(player);
    	dealer = dealersTurn();
    	

    	if (player > 20) {

                console.log("You Bust. Dealer Wins");
                rePlay(); 

    		}else if (dealer > 20) {

            console.log("Dealer Bust. You Win");
            rePlay(); 
    
    		}  else if (dealer < player) {


    		console.log("You Win!");
            rePlay();

    		}else { 
    			console.log("Dealer Wins");
                rePlay(); 
    		}
    	}

   




    	    
	
   
checkWhoWon();


console.log(takePlayerTurn());
console.log(dealersTurn());











