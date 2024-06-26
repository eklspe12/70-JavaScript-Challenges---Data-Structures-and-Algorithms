function findMissingLetter(arr) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const index = alphabet.indexOf(arr[0]);
	for (i = 0; i < arr.length; i++) {
		if (alphabet.charAt(index + i) !== arr[i]) {
			return alphabet.charAt(index + i);
		}
	}
}

findMissingLetter(['a', 'b', 'c', 'e']);
findMissingLetter(['X', 'Z']);
findMissingLetter(['m', 'n', 'o', 'q', 'r']);
findMissingLetter(['F', 'G', 'H', 'J']);
// const to hold all char of alphabet
// const to hold first elements value
// iterate through array for the length of array
//      check if value of position is not the same as i plus position
//          if not the same, return what is present at i position

module.exports = findMissingLetter;
