function intersections(arr1, arr2) {
	let intersections = [];
	for (const num of arr1) {
		if (arr2.includes(num)) {
			intersections.push(num);
		}
	}
	return intersections;
}

console.log([intersections([1, 2, 4, 5, 7], [3, 2, 5, 8, 7])]);
