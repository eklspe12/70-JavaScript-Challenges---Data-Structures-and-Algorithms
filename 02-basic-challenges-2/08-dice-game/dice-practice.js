function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function dice(num) {
	let results = [];
	for (let i = 0; i < num; i++) {
		let dice1 = rollDice();
		let dice2 = rollDice();
		let sum = dice1 + dice2;
		let result = 'roll again';
		if (sum === 7 || sum === 11) {
			result = 'you win';
		} else if (sum === 5 || sum === 6 || sum === 7) {
			result = 'you lose';
		}
		results.push({ dice1, dice2, sum, result });
	}
	return results;
}

console.log(dice(3));
