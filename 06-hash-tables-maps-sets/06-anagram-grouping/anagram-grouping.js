function anagramGrouping(words) {
	let anagrams = new Map();
	for (const word of words) {
		const sorted = word.split('').sort().join('');
		if (anagrams.has(sorted)) {
			anagrams.get(sorted).push(word);
		} else {
			anagrams.set(sorted, [word]);
		}
	}
	return Array.from(anagrams.values());
}
module.exports = anagramGrouping;
