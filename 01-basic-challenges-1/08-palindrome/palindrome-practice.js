function palaindrome(str) {
	let reverse = '';
	for (let i = str.length - 1; i > -1; i--) {
		reverse = reverse + str[i];
	}
	if (reverse === str) {
		return true;
	}
	return false;
}

console.log(palaindrome('racecar'));

console.log(palaindrome('jello'));
