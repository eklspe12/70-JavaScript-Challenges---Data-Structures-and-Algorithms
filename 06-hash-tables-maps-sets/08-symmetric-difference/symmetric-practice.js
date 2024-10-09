function symmetricDifference(arr1, arr2) {
	const set = new Set();
	for (const item of arr1) {
		if (!arr2.includes(item)) {
			set.add(item);
		}
	}
	for (const item of arr2) {
		if (!arr1.includes(item)) {
			set.add(item);
		}
	}
	return Array.from(set);
}

console.log(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]));
