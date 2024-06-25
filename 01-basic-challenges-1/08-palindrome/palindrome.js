function isPalindrome(str) {
	let forward = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let forwardArray = forward.split('');
	let backwardArray = [];
	for (i = forwardArray.length - 1; i >= 0; i--) {
		backwardArray.push(forwardArray[i]);
	}
	let backward = backwardArray.join('');
	return backward === forward;
}

isPalindrome('A man, a plan, a canal, Panama');

module.exports = isPalindrome;
