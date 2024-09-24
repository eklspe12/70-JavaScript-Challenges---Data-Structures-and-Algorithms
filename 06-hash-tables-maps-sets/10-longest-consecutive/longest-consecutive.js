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
//      create new set from numbers
//      create variable to hold longest sequence with a default of 0
//          iterate through each number
//          check to see if the previous number is not in set ensuring proper starting point
//              if true set current number to number and currentLongest to 1
//              run while loop to check for next numbers
//                  currentLongest and currentNum ++ if true
//              compare currentLongest to Longest
//      return new longest
