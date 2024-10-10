const Queue = require('./queue');
const Stack = require('./stack');

function isPalindrome(str) {
	const stack = new Stack();
	const queue = new Queue();

	for (const char of str) {
		stack.push(char);
		queue.enqueue(char);
	}
	while (!queue.isEmpty()) {
		if (queue.dequeue() !== stack.pop()) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
