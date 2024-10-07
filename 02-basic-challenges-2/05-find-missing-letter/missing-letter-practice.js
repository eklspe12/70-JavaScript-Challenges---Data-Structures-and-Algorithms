function missingLetter(arr) {
	let alphabet = 'abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUBWXYZ';
	let start = alphabet.indexOf(arr[0]);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== alphabet[start + i]) {
			return alphabet[start + i];
		}
	}
}

console.log(missingLetter(['a', 'b', 'd']));
