 int rollDie(int die) {

		die = (int)(Math.random() * 10) + 1; 
		return die; 
	}

	public void printLine() {

		System.out.println(rollDie(die)); 
	}
}


