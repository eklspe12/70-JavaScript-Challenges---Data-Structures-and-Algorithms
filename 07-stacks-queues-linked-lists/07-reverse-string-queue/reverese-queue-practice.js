const Queue = require('./queue');

function reverseString(str) {
	const queue = new Queue();
	for (let i = str.length - 1; i > -1; i--) {
		queue.enqueue(str[i]);
	}
	let reverse = '';
	while (!queue.isEmpty()) {
		reverse = reverse + queue.dequeue();
	}
	return reverse;
}

console.log(reverseString('hello'));
