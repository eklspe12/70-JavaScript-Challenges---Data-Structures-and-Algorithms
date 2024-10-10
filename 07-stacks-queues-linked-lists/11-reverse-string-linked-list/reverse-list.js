const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
	const list = new LinkedList();
	for (let i = str.length - 1; i >= 0; i--) {
		list.add(str[i]);
	}
	let current = list.head;
	let reverse = '';
	while (current) {
		reverse += current.data;
		current = current.next;
	}
	return reverse;
}

console.log(reverseStringLinkedList('hello'));
