function sumUp(number) {
	if (number === 1) {
		return 1;
	}
	return number + sumUp(number - 1);
}

console.log(sumUp(5));
