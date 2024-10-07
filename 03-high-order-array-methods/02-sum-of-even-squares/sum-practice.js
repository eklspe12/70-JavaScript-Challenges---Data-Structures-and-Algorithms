function sumOfEvenSquares(arr) {
	let evens = arr.filter((f) => {
		return f % 2 === 0;
	});
	let squares = [];
	evens.forEach((num) => {
		squares.push(num * num);
	});
	return squares.reduce((total, num) => {
		return total + num;
	}, 0);
}
console.log(sumOfEvenSquares([1, 2, 3, 4, 5, 6]));
