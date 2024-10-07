function validateEmail(str) {
	const email = str.split('');
	if (email.includes('.') && email.includes('@')) {
		return true;
	} else {
		return false;
	}
}

console.log(validateEmail('hello@gmail.com'));
console.log(validateEmail('hello.com'));
console.log(validateEmail('hello@gmailcom'));
