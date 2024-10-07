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
	const node = new Node(data);
	if (!this.head) {
		this.head = node;
		this.tail = node;
	} else {
		this.tail.next = node;
		node.prev = this.tail;
	}
	this.length++;
	return true;
};

DoublyLinkedList.prototype.printAll = function () {
	let current = this.head;
	if (!this.head) {
		return null;
	}
	while (current) {
		console.log(current);
		current = current.next;
	}
	return true;
};

DoublyLinkedList.prototype.prepend = function (data) {
	const node = new Node(data);
	if (!this.head) {
		this.head = node;
		this.tail = node;
		this.length++;
		return true;
	} else {
		this.head.prev = node;
		node.next = this.head;
		this.head = node;
		this.length++;
		return true;
	}
};

DoublyLinkedList.prototype.insert = function (index, data) {
	const node = new Node(data);
	if (index < 0 || index > this.length) {
		return null;
	} else if (index === 0) {
		return this.prepend(data);
	} else if (index === this.length) {
		return this.append(data);
	} else {
		let current = this.head;
		let i = 0;
		while (current) {
			if ((i = index)) {
				node.next = current.next;
				node.prev = current;
				current.next.prev = node;
				current.next = node;
			}
		}
	}
};

DoublyLinkedList.prototype.get = function (index) {
	if (index < 0 || index > this.length) {
		return null;
	} else if (index === 0) {
		return this.head;
	} else if (index === this.length) {
		return this.tail;
	} else {
		let current = this.head;
		let i = 0;
		while (current) {
			if ((i = index)) {
				return current.data;
			}
			current = current.next;
			i++;
		}
	}
	return false;
};

DoublyLinkedList.prototype.remove = function (data) {
	if (!this.head) {
		return null;
	} else if (this.head.data === data) {
		this.head = this.head.next;
		this.head.prev = null;
		this.length--;
		return true;
	} else if (this.tail.data === data) {
		this.tail = this.tail.prev;
		this.tail.next = null;
		this.length--;
		return true;
	} else {
		let current = this.head;
		while (current) {
			if (current.data === data) {
				current.prev.next = current.next;
				current.next.prev = current.prev;
				this.length--;
				return true;
			}
			current = current.next;
		}
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
