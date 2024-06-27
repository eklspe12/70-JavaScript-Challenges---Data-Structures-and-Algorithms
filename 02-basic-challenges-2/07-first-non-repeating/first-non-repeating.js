function findFirstNonRepeatingCharacter(str) {
	let strArr = str.split('');
	for (i = 0; i < strArr.length; i++) {
		if (strArr[i] !== strArr[i + 1] && strArr[i] !== strArr[i - 1]) {
			return strArr[i];
		}
	}
	return null;
}

// function takes in a str
//      str is split into array
//          iterate through array and compare index location to immediate neighbors
//              return element if no match
//      return null if all matches

module.exports = findFirstNonRepeatingCharacter;
