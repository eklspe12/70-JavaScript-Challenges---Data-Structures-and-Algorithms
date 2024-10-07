function titleCase(str) {
	const words = str.toLowerCase().split(' ');
	const fixedWords = [];
	for (const word of words) {
		let firstChar = word.charAt(0).toUpperCase();
		let fixedWord = firstChar + word.slice(1);
		fixedWords.push(fixedWord);
	}
	return fixedWords.join(' ');
}

console.log(titleCase('this is the string to fix'));
