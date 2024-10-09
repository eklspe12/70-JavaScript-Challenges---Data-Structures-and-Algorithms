function anagramGrouping(arr) {
	const anagrams = new Map();
	for (const item of arr) {
		let sorted = item.split('').sort().join('');
		if (!anagrams.has(sorted)) {
			anagrams.set(sorted, [item]);
		} else {
			anagrams.get(sorted).push(item);
		}
	}
	return Array.from(anagrams.values());
}

console.log(anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']));
