const HashTable = require('./HashTable');

function anagrams(arr) {
	const anagrams = new HashTable();
	for (const word of arr) {
		let sorted = word.split('').sort().join('');
		if (!anagrams.has(sorted)) {
			anagrams.set(sorted, [word]);
		} else {
			anagrams.get(sorted).push(word);
		}
	}
	return anagrams.getValues();
}

console.log(anagrams(['listen', 'silent', 'hello', 'world', 'act', 'cat']));
