function findMissingLetter(array) {
	let start = array[0].charCodeAt(0);
	for (i = 0; i < array.length; i++) {
		if (start + i !== array[i].charCodeAt(0)) {
			return String.fromCharCode(start + i);
		}
	}
}

console.log(findMissingLetter(['a', 'b', 'c', 'e']));
module.exports = findMissingLetter;

//function takes in an array
//  store the unicode value of first array position
//
