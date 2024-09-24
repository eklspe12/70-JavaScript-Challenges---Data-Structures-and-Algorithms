function longestConsecutiveSequence(numbers) {
	const numberSet = new Set(numbers);
	let longest = 0;

	for (const num of numberSet) {
		if (!numberSet.has(num - 1)) {
			let currentNum = num;
			let currentLongest = 1;

			while (numberSet.has(currentNum + 1)) {
				currentLongest++;
				currentNum++;
			}
			longest = Math.max(longest, currentLongest);
		}
	}
	return longest;
}

module.exports = longestConsecutiveSequence;

// function takes in array of numbers
//      create new array that has numbers sorted
