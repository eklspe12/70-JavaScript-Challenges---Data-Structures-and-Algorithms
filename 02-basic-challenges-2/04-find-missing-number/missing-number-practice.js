function findNumber(arr) {
	if (!arr) {
		return undefined;
	} else if (arr.length === 0) {
		return 1;
	}
	for (let i = 0; i < arr.length; i++) {
		if (!arr.includes(arr[i] - 1) && arr[i] !== 1) {
			return arr[i] - 1;
		} else if (!arr.includes(arr[i] + 1)) {
			return arr[i] + 1;
		}
	}
}

console.log(findNumber());
console.log(findNumber([1, 2, 3, 4, 6, 7, 8]));
