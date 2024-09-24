function twoSum(numbers, target) {
	const numberSet = new Set();
	for (i = 0; i < numbers.length; i++) {
		let pair = target - numbers[i];
		if (numberSet.has(pair)) {
			return [numbers.indexOf(pair), i];
		}
		numberSet.add(numbers[i]);
	}
	return [];
}

module.exports = twoSum;

// function takes in an array of integers
//          create new set to hold used numbers
