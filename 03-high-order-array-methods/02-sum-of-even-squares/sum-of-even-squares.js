function sumOfEvenSquares(arr) {
	let evenNums = arr.filter((num) => num % 2 === 0);
	let answer = evenNums.reduce((total, num) => {
		return total + num * num;
	}, 0);
	console.log(answer);
	return answer;
}

//function takes in array
//      filter through to get all even numbers
//      use reduce to square and add all remaining numbers

module.exports = sumOfEvenSquares;
