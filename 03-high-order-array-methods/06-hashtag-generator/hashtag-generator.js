function generateHashtag(str) {
	let words = str.split(' ');
	let hashtag = '#';
	words.forEach((word) => {
		let firstChar = word.slice(0, 1).toUpperCase();
		let fixedWord = firstChar + word.slice(1);
		hashtag = hashtag + fixedWord;
	});
	if (hashtag.length > 140 || str === '') {
		return false;
	}
	return hashtag;
}

generateHashtag(
	'"This is a very very very at should result in a false hashtag because it exceeds the character limit of 140"'
);

module.exports = generateHashtag;

//function takes in a str
//      str is split by words stored in an array
//      array is iterated over to capitalize first letter of each string
//      array is rejoined
//      check length of new string
// return with a hastag in front

// ### Constraints

// - Return `false` if the input string is empty or contains only whitespace characters.
// - Return `false` if the generated hashtag string is longer than 140 characters.
// - Every word in the hashtag should start with a capital letter.
// - The input string may contain leading/trailing whitespace characters.

// ### Hints

// - You can use the string manipulation methods `trim()`, `split()`, and `join()` to work with the input string.
// - You can use the string method `charAt()` to get the character at a specific index.
// - Use string methods to capitalize the first letter of each word.
