class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');

function recDepthFirstTraversal(root) {
	const result = [];
	function traverse(node) {
		if (node !== null) {
			result.push(node.data);
			traverse(node.left);
			traverse(node.right);
		}
	}
	traverse(root);
	return result;
}

module.exports = {
	Node,
	recDepthFirstTraversal,
};
