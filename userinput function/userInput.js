"use strict";
var player1;
var player2;

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

player1 = userInput();
player2 = userInput();

//AI dealer rolls once 1st//

console.log("Welcome " +player1+", are you ready to roll your dice?");
//player1 rolls dice until he desires to stay//


console.log("Welcome " +player2+", are you ready to roll your dice?");
//player2 rolls dice until he desires to stay//

//AI dealer then rolls until dealer has at least a 17 or bust//



