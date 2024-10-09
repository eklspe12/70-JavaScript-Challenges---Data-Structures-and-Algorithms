function wordFrequencyCounter(str) {
	const wordMap = new Map();
	const words = str.toLowerCase().split(' ');
	for (const item of words) {
		if (!wordMap.has(item)) {
			wordMap.set(item, 1);
		} else {
			wordMap.set(item, wordMap.get(item) + 1);
		}
	}
	return wordMap;
}
console.log(wordFrequencyCounter('This is my string and this is the words'));

module.exports = wordFrequencyCounter;
