function Node(data) {
	this.data = data;
	this.next = null;
	this.prev = null;
}

function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

DoublyLinkedList.prototype.append = function (data) {
	const newNode = new Node(data);
	if (!this.head) {
		this.head = newNode;
		this.tail = newNode;
	} else {
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
	}
	this.length++;
};

DoublyLinkedList.prototype.printAll = function () {
	let current = this.head;
	while (current) {
		console.log(current.data);
		current = current.next;
	}
};

DoublyLinkedList.prototype.prepend = function (data) {
	const newNode = new Node(data);

	if (!this.head) {
		this.head = newNode;
		this.tail = newNode;
	} else {
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
	}
	this.length++;
};

DoublyLinkedList.prototype.insert = function (index, data) {
	if (index < 0 || index > this.length) {
		return null;
	}
	if (index === 0) {
		return this.prepend(data);
	}
	if (index === this.length) {
		return this.append(data);
	}
	const newNode = new Node(data);

	let currentNode = this.head;

	for (let i = 0; i < index - 1; i++) {
		currentNode = currentNode.next;
	}

	newNode.next = currentNode.next;
	newNode.previous = currentNode;
	currentNode.next.prev = newNode;
	currentNode.next = newNode;

	this.length++;
};

DoublyLinkedList.prototype.get = function (index) {
	if (index < 0 || index >= this.length) {
		return null;
	}
	let currentNode = this.head;
	for (let i = 0; i < index; i++) {
		currentNode = currentNode.next;
	}
	return currentNode;
};

DoublyLinkedList.prototype.remove = function (data) {
	if (!this.head) return;

	let currentNode = this.head;
	while (currentNode) {
		if (currentNode.data === data) {
			if (currentNode === this.head) {
				this.head = currentNode.next;
				if (this.head) {
					this.head.prev = null;
				}
			} else if (currentNode === this.tail) {
				this.tail = currentNode.prev;
				this.tail.next = null;
			} else {
				currentNode.prev.next = currentNode.next;
				currentNode.next.prev = currentNode.prev;
			}

			this.length--;
			return true;
		}

		currentNode = currentNode.next;
	}

	return false;
};

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');

list.printAll();

console.log(list);

module.exports = DoublyLinkedList;
