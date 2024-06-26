function findMissingNumber(array) {
	sortedArray = array.sort();
	for (i = sortedArray[0]; i <= sortedArray.length; i++) {
		if (!sortedArray.includes(i)) {
			console.log(i);
			return i;
		}
	}
}

findMissingNumber([2, 5, 3, 1]);

// function takes in array of numbers
//      sortedArray hold numbers in ascending order
//      for loop iterates each member to see if it is equal to i
//          sets varaible to equal number not equal to i
// return variable of missing number

module.exports = findMissingNumber;
