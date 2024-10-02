function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];
	console.log(left, pivot, right);

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 1, 7, 4, 9, 12]));

module.exports = quickSort;
