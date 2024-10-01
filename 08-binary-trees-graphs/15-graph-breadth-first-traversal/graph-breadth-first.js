const Queue = require('./queue');

function breadthFirstTraversal(graph, start) {
	const visited = new Set();
	const result = [];
	const queue = new Queue();

	queue.enqueue(start);
	visited.add(start);

	while (!queue.isEmpty()) {
		const currentVertex = queue.dequeue();
		result.push(currentVertex);

		for (const n of graph.adjacencyList[currentVertex]) {
			if (!visited.has(n)) {
				queue.enqueue(n);
				visited.add(n);
			}
		}
	}
	return result;
}

module.exports = breadthFirstTraversal;
