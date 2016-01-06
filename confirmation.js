"use strict";
function getUserConfirmation(){
	var retAns = confirm("Thanks for choosing to play!");
	    if (retAns == true) {
	        console.log("Let's Roll!");
	        return true;
	}   else{
		    console.log("Guess not!");
		    return false;

	}
}