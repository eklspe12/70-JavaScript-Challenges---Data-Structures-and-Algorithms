function titleCase(str) {
	let words = str.split(' ');
	let capitalWords = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});
	let newString = capitalWords.join(' ');
	return newString;
}

// function titleCase(str) {
//     seperate strings into a set or Array
//     modify each new string to be a capital
//     put array or set of strings back together
//     return new string
// }

module.exports = titleCase;
