
	
	

	function randomDiceRoll() {

		var dealerCards = number = Math.floor((Math.random() * 10));

		return dealerCards;  

	}

	console.log(randomDiceRoll()); 

 

	function hitDonthit(total) {


	if (total <= 17) {

		
		console.log("Dealer Stays");
	} else {

		console.log("Dealer Hits"); 
	
	 
	}} 
	console.log(hitDonthit(randomDiceRoll));

	