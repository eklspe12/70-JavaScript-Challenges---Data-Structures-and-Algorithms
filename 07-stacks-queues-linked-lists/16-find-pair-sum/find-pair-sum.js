const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, target) {
	const used = new DoublyLinkedList();
	for (const num of nums) {
		difference = target - num;
		if (used.contains(difference)) {
			return [difference, num];
		}
		used.append(num);
	}
	return null;
}

module.exports = findPairSum;
