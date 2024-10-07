function anagrams(str1, str2) {
	let letters = str1.split('').sort().join('');
	if (letters === str2.split('').sort().join('')) {
		return true;
	}
	return false;
}

console.log(anagrams('cat', 'shoe'));
