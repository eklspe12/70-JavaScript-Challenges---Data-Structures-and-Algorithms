function hashtagGenerator(str) {
	let words = str.split(' ');
	let hashtag = '#';
	words.forEach((word) => {
		let firstChar = word.slice(0, 1).toUpperCase();
		let fixedWord = firstChar + word.slice(1);
		hashtag = hashtag + fixedWord;
	});
	if (hashtag.length > 140) {
		return false;
	}
	return hashtag;
}

console.log(hashtagGenerator('This is a hashtag'));
console.log(
	hashtagGenerator(
		'This is a hashtag that is way to loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong'
	)
);
