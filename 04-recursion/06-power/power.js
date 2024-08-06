function power(base, exponent) {
	if (exponent === 1) {
		return base;
	} else if (exponent <= 0) {
		return 1;
	}
	return base * power(base, exponent - 1);
}

module.exports = power;

console.log(power(5, 3));
//function take in base and exponent
//  base case checks if exponent is equal to 1 or 0, returning base or 1 respectively
//  return base * recursive funciton with exponent -1
