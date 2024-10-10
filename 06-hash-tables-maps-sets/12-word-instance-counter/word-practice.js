const HashTable = require('./HashTable');

function wordInstanceCounter(str, word) {
	const wordHash = new HashTable();
	const words = str.toLowerCase().split(/\W+/);
	let count = 0;
	const target = word;
	for (const item of words) {
		if (item === target) {
			if (!wordHash.has(item)) {
				wordHash.set(item, 1);
			} else {
				wordHash.set(item, wordHash.get(item) + 1);
			}
			count++;
		}
	}
	return count;
}

console.log(wordInstanceCounter('This is my string this is this.', 'this'));
