const HashTable = require('./HashTable');

function wordInstanceCounter(string, word) {
	const wordHash = new HashTable();
	const words = string.toLowerCase().split(/\W+/);
	let count = 0;
	const target = word;

	for (const currentWord of words) {
		if (currentWord === '') {
			continue;
		}
		if (!wordHash.has(currentWord)) {
			wordHash.set(currentWord, 1);
		} else {
			wordHash.set(currentWord, wordHash.get(currentWord) + 1);
		}
		if (target === currentWord) {
			count = wordHash.get(currentWord);
		}
	}
	return count;
}

console.log(wordInstanceCounter('The that The This The That', 'the'));

module.exports = wordInstanceCounter;
