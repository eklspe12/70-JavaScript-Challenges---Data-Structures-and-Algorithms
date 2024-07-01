function validateEmail(str) {
	if (str.includes('.') && str.includes('@') && str.indexOf('@') !== 0) {
		return true;
	} else {
		return false;
	}
}

validateEmail('eso@outlook.com');
validateEmail('@outlook.com');

module.exports = validateEmail;
