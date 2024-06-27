function diceGameSimulation(numSimulations) {
	const results = [];
	for (i = 0; i < numSimulations; i++) {
		let dice1 = Math.floor(Math.random() * 6) + 1;
		let dice2 = Math.floor(Math.random() * 6) + 1;
		let sum = dice1 + dice2;
		let result = '';
		if (sum === 2 || sum === 3 || sum === 12) {
			result = 'lose';
		} else if (sum === 7 || sum === 11) {
			result = 'win';
		} else {
			result = 'roll again';
		}
		results.push({ dice1, dice2, sum, result });
	}
	console.log(results);
	return results;
}

diceGameSimulation(10);
// Write a function called `diceGameSimulation` that simulates this dice game. The function should take one argument:

// - `numSimulations`: The number of times to simulate the dice game.

// The game rules are if a 7 or 11 are rolled, the player wins and they get a result of `win`. If a 2, 3 or 12 are rolled they lose and get a result of `lose`. Anything else and they get a result of `roll again`.

// The function should return an array of objects, where each object represents a simulation result. Each object should contain the following properties:

// - `dice1`: The value of the first dice (a random number between 1 and 6).
// - `dice2`: The value of the second dice (a random number between 1 and 6).
// - `sum`: The sum of the two dice values.
// - `result`: The result of the roll, which can be "win", "lose", or "roll again".

module.exports = diceGameSimulation;
