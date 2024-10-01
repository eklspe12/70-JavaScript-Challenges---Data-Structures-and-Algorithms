const Stack = require('./stack');

function depthFirstTraversal(graph, start) {
	if (!graph.adjacencyList[start]) {
		return [];
	}

	const visited = {};
	const stack = [start];
	const result = [];

	visited[start] = true;

	while (stack.length) {
		const currentVertex = stack.pop();
		result.push(currentVertex);

		graph.adjacencyList[currentVertex].forEach((neighbor) => {
			if (!visited[neighbor]) {
				visited[neighbor] = true;
				stack.push(neighbor);
			}
		});
	}
	return result;
}

module.exports = depthFirstTraversal;
