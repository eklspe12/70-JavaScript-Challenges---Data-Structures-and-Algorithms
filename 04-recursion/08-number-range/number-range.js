function numberRange(startNum, endNum) {
	if (startNum === endNum) {
		return [startNum];
	}
	let numbers = numberRange(startNum, endNum - 1);
	numbers.push(endNum);
	return numbers;
}

console.log(numberRange(1, 5));
module.exports = numberRange;

//function takes in takes in startNum and endNum
//      Base case checks if startNum and endNum are equal, return end Num if true
//      returns array[startNum] + recursive funciton with startNum + 1 passed in
