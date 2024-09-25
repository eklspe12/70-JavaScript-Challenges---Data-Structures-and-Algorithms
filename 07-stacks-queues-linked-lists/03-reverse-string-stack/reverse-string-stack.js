const Stack = require('./stack');

function reverseStringStack(str) {
	const stack = new Stack();
	let reversed = '';
	for (i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}
	while (!stack.isEmpty()) {
		reversed = reversed + stack.pop();
	}
	return reversed;
}

console.log(reverseStringStack('hello'));

module.exports = reverseStringStack;

// function takes in a string to be reversed
//      create new stack
//      create variable to hold reversed string
//      iterate over string, pushing each letter to stack
//      iterate over stack, making reversed string equal to string + pop
//      return reversedstring
