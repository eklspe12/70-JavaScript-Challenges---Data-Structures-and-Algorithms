function twoSum(arr, target) {
	const seen = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (!seen.has(i)) {
			seen.add(i);
		}
		if (arr[i] + arr[i + 1] === target) {
			seen.add(i + 1);
			return `${seen} (${arr[i]} + ${arr[i + 1]} = ${target})`;
		} else seen.delete(i);
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1] (2 + 7 = 9)

console.log(twoSum([3, 2, 4], 6));
// Output: [1, 2] (2 + 4 = 6)

console.log(twoSum([3, 3], 6));
// Output: [0, 1] (3 + 3 = 6)
