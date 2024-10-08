function numberRange(start, end) {
	if (start === end) {
		return start;
	}

	return [start].concat(numberRange(start + 1, end));
}

console.log(numberRange(3, 5));

// 3 is not 5
//  array is created with 3 att the start and concanated with the result of numberRange(4, 5)
//      4 is not 5
//          array is created with 4 at the start and concanated with result of numberRange(5,5)
//              5 is 5
//              5 is passed up
//          array with 4 is concanated with 5
//      array is passed up [4,5]
//  array of [3] is cononated with [4, 5] and returned
