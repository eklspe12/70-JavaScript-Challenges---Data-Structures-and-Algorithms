function factorial(num) {
	if (num <= 0 || num === 1) {
		return 1;
	}
	return num * factorial(num - 1);
}
console.log(factorial(0));
module.exports = factorial;

//function takes in a number
//      base case if num is equal to 1 or 0, return 1
// return num multiplied by factorial num -1
