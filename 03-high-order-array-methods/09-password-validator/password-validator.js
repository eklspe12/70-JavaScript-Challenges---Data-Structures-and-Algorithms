function validatePassword(str) {
	if (str.length < 8) {
		return false;
	}
	if (str === str.toUpperCase()) {
		return false;
	}
	if (str === str.toLowerCase()) {
		return false;
	}
	return /\d/.test(str);
}

module.exports = validatePassword;

console.log(validatePassword('Abc12345'));

// function takes in a string
//      check string len < 7
//      check if any char of str include uppcase
//      check if any char of str include lowercase
//      check if any char in str is a number

// 1. The password must be at least 8 characters long.
// 2. The password must contain at least one uppercase letter.
// 3. The password must contain at least one lowercase letter.
// 4. The password must contain at least one digit.
