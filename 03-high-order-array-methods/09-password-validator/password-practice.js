function validatePassword(password) {
	const lengthCheck = password.length >= 8;

	const upperCaseCheck = password
		.split('')
		.some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

	const lowerCaseCheck = password
		.split('')
		.some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

	const numberCheck = password
		.split('')
		.some((char) => !isNaN(parseInt(char, 10)));

	return lengthCheck && upperCaseCheck && lowerCaseCheck && numberCheck;
}

console.log(validatePassword('hello'));
console.log(validatePassword('thisisbad123'));
console.log(validatePassword('THISISBAD345'));
console.log(validatePassword('Thisisgood123'));
