const Stack = require('./stack');

class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

function depthFirstTraversal(root) {
	if (!root) {
		return [];
	}
	const result = [];
	const stack = [];
	stack.push(current.data);

	while (stack.length > 0) {
		const current = stack.pop();
		result.push(current.data);
	}
	if (current.right) {
		stack.push(current.right);
		z;
	}
	if (current.left) {
		stack.push(current.left);
	}
	return result;
}

module.exports = {
	Node,
	depthFirstTraversal,
};
