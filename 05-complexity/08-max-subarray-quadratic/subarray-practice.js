function maxSubarraySum(arr, num) {
	let maxSum = 0;
	for (let i = 0; i <= arr.length - num; i++) {
		let tempSum = 0;
		for (let j = i; j < i + num; j++) {
			tempSum += arr[j];
		}
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}
	return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 9, 10, 12, 4, 5, 6, 7], 3));
