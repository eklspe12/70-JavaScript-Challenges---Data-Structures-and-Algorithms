function countVowels(str) {
	let stringArray = str.split('');
	let count = 0;
	for (i = 0; i < stringArray.length; i++) {
		if (
			stringArray[i].toLowerCase() === 'a' ||
			stringArray[i].toLowerCase() === 'e' ||
			stringArray[i].toLowerCase() === 'i' ||
			stringArray[i].toLowerCase() === 'o' ||
			stringArray[i].toLowerCase() === 'u'
		) {
			count++;
		}
	}
	return count;
}

module.exports = countVowels;
