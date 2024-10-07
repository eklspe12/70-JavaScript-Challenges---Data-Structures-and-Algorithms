function highestScoringWord(str) {
	let words = str.split(' ');
	let highest = { word: '', total: 0 };
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (const word of words) {
		let count = 0;
		for (let i = 0; i < word.length; i++) {
			let score = alphabet.indexOf(word[i]);
			count = count + score;
		}
		if (count > highest.total) {
			highest = { word: word, total: count };
		}
	}
	return highest.word;
}

console.log(highestScoringWord('what is the highest scoring word'));
