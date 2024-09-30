const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
	const list = new LinkedList();
	for (let i = str.length - 1; i >= 0; i--) {
		list.add(str[i]);
	}
	let reversed = '';
	let current = list.head;
	while (current !== null) {
		reversed += current.data;
		current = current.next;
	}
	return reversed;
}

console.log(reverseStringLinkedList('hello'));

module.exports = reverseStringLinkedList;

// function takes in a string to be reversed
//          initialize new linked list
//          add each letter as node, for loop?
//      iterate through list adding last letter on string and changing  node values
// return string
