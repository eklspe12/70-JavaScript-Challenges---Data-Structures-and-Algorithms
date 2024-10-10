const Stack = require('./stack');

function reverseString(str) {
	const stack = new Stack();
	for (const char of str) {
		stack.push(char);
	}
	let reversed = '';
	while (stack.top !== -1) {
		reversed = reversed + stack.pop();
	}
	return reversed;
}

console.log(reverseString('Hello'));
