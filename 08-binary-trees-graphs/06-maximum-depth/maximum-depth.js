class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function maxDepth(root) {
	if (!root) {
		return 0;
	}
	let left = maxDepth(root.left);
	let right = maxDepth(root.right);

	return Math.max(left, right) + 1;
}

module.exports = {
	maxDepth,
	Node,
};

// function takes in a root
