"use strict";
var player1, player2;

function userInput(){
	var namePrompt;
	namePrompt = prompt ("Enter your name", "");
     inputCheck(namePrompt)
    return namePrompt;
};
function inputCheck(namePrompt){
        if (namePrompt.length > 0)
        	{return namePrompt;
        } else if (namePrompt.length === 0)
            {userInput();};	
};

player1 = userInput();
player2 = userInput();

console.log(player1);
console.log(player2);