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
        	{console.log(namePrompt)
        } else if (namePrompt.length === 0)
            {userInput();};	
    return namePrompt;
};

player1 = userInput();
player2 = userInput();
