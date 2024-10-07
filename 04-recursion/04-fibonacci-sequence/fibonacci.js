function fibonacci(num) {
	if (num < 2) {
		return num;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6));

module.exports = fibonacci;

//function takes in a number
//      set base case for if num is equal to 1 and a base case for zero
//      if not base case return fib of num minus 1 plus fib of num -2
