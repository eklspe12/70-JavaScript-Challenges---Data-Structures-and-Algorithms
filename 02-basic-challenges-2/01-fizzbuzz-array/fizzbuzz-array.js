function fizzBuzzArray(num) {
	let fizzBuzzArray = [];
	for (i = 1; i <= num; i++) {
		if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
			fizzBuzzArray.push('FizzBuzz');
		} else if (Number.isInteger(i / 3)) {
			fizzBuzzArray.push('Fizz');
		} else if (Number.isInteger(i / 5)) {
			fizzBuzzArray.push('Buzz');
		} else {
			fizzBuzzArray.push(i);
		}
	}
	console.log(fizzBuzzArray);
	return fizzBuzzArray;
}

fizzBuzzArray(30);

// create an empty array to hold number and word
//      iterate through all numbers
//          check if the number divided by 3 or 5 is a whole number
//              add to array if yes

module.exports = fizzBuzzArray;
