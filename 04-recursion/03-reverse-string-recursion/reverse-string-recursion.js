function reverseString(str) {
	if (str.length === 0) {
		return '';
	}
	let lastChar = str.slice(-1);
	let newStr = str.slice(0, -1);
	return lastChar + reverseString(newStr);
}

reverseString('Hello');

module.exports = reverseString;

// function takes in a str
//      base case is str is empty or length = 1
//      recursively add remove letter to an array/str
//      return reverse str
