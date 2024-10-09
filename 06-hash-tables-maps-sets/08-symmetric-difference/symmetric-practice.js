function symmetricDifference(arr1, arr2) {
	const set = new Set(arr1);
	for (const item of arr2) {
		if (!set.has(item)) {
			set.add(item);
		}
	}
	return Array.from(set);
}

console.log(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]));
