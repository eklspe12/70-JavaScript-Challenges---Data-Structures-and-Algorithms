function reverseString(str) {
	let letters = str.split('');
	let reverseArray = [];
	for (i = letters.length - 1; i >= 0; i--) {
		reverseArray.push(letters[i]);
	}
	let reverseString = reverseArray.join('');
	return reverseString;
}

reverseString('hello');

// function takes in a string
//      create array to hold new variable of split string
//      for each letter of array, add to new array starting at end
//      return new array

module.exports = reverseString;
