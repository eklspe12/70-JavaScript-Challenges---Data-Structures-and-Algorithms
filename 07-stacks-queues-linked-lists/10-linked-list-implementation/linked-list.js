class Node {
	constructor(data) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	add(data) {
		const node = new Node(data);
		if (this.head === null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}
		this.tail = node;
	}

	printAll() {
		if (this.head === null) {
			return false;
		}
		let current = this.head;

		while (current !== null) {
			console.log(current.data);
			current = current.next;
		}
	}

	get(index) {
		let current = this.head;
		let i = 0;

		while (i < index) {
			current = current.next;
			i++;
		}
		return current.data;
	}

	insertAt(index, data) {
		const node = new Node(data);
		if (index === 0) {
			node.next = this.head;
			this.head = node;
		}
		let current = this.head;
		let previous = null;
		let i = 0;

		while (i < index) {
			previous = current;
			current = current.next;
			i++;
		}
		previous.next = node;
		node.next = current;
	}

	removeFrom(index) {
		if (index === 0) {
			this.head = this.head.next;
		}
		let current = this.head;
		let previous = null;
		let i = 0;

		while (i < index) {
			previous = current;
			current = current.next;
			i++;
		}
		previous.next = current.next;
	}
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.printAll();
module.exports = { Node, LinkedList };
