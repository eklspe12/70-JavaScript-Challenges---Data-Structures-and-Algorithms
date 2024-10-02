function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

function merge(left, right) {
	const merged = [];
	let indexLeft = 0;
	let indexRight = 0;

	while (indexLeft < left.length && indexRight < right.length) {
		if (left[indexLeft] < right[indexRight]) {
			merged.push(left[indexLeft]);
			indexLeft++;
		} else {
			merged.push(right[indexRight]);
			indexRight++;
		}
	}
	return merged.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([5, 2, 7, 3, 1, 6, 4, 8]));

module.exports = mergeSort;
