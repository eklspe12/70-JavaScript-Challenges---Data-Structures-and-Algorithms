function validIPV4(str) {
	let octets = str.split('.');
	// console.log(octets);
	if (octets.length !== 4) {
		return false;
	}
	for (const number of octets) {
		let firstNum = number.slice(0, 1);
		// console.log(firstNum);
		if (firstNum === 0 || number < 0 || number > 255) {
			return false;
		}
	}
	return true;
}

console.log(validIPV4('123.223.23.3'));
console.log(validIPV4('1.2.3'));
console.log(validIPV4('260.34.12.123'));
console.log(validIPV4('-1.23.34.5'));
