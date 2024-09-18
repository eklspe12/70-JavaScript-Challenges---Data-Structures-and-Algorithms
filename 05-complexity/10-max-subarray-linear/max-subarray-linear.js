function maxSubarraySum(arr, k) {
	let max = -Infinity;
	for (i = 0; i < arr.length - (k - 1); i++) {
		let temp = arr[i] + arr[i + 1] + arr[i + 2];
		if (temp > max) {
			max = temp;
		}
	}
	console.log(max);
	return max;
}

maxSubarraySum([-1, -5, -40, -2, -1, -6, -400, -400], 3);

module.exports = maxSubarraySum;
