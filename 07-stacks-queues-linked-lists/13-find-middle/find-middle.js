function findMiddle(LinkedList) {
	let fast = LinkedList.head;
	let slow = LinkedList.head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}
	return slow;
}

module.exports = findMiddle;

//function takes in a linkedList to find middle
//
