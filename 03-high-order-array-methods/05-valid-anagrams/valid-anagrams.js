function validAnagrams(str1, str2) {
	let str1Var = str1.split('').sort().join();
	let str2Var = str2.split('').sort().join();
	if (str1Var === str2Var) {
		return true;
	} else {
		return false;
	}
}

validAnagrams('hello', 'goodbye');

//function takes in 2 strings
//      each string is separated into arrays of characters
//      sort each array alphabetically
//      compare the arrays rejoined into a string

module.exports = validAnagrams;
