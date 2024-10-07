function countVowel(str) {
	let count = 0;
	for (i = 0; i < str.length; i++) {
		const letter = str[i];
		if (
			letter === 'a' ||
			letter === 'e' ||
			letter === 'i' ||
			letter === 'o' ||
			letter === 'u'
		) {
			count++;
		}
	}
	return count;
}

console.log(countVowel('hello'));
