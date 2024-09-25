const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
	const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const queue = new Queue();
	const stack = new Stack();

	for (i = 0; i < cleanStr.length; i++) {
		stack.push(cleanStr[i]);
		queue.enqueue(cleanStr[i]);
	}

	while (!queue.isEmpty()) {
		if (stack.pop() !== queue.dequeue()) {
			return false;
		}
	}
	return true;
}

module.exports = isPalindromeQueueStack;
