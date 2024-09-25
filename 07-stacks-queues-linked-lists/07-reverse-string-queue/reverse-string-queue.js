const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
	const queue = new Queue();
	let reverse = '';
	for (i = str.length - 1; i > -1; i--) {
		queue.enqueue(str[i]);
	}
	while (!queue.isEmpty()) {
		reverse = reverse + queue.dequeue();
	}
	return reverse;
};

module.exports = reverseStringWithQueue;

// function takes in a string to be reversed (will need to be different since FIFO)
//      create a queue
//      iterate through str backwards enqueueing each character
//      while loop to iterate queue until empty, dequeueing into string
