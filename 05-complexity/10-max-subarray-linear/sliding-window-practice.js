function maxSubarraySum(arr, k) {
	let max = 0;
	let temp = 0;
	for (let i = 0; i < k; i++) {
		max += arr[i];
	}
	temp = max;
	for (let i = 0; i < arr.length - k; i++) {
		temp = temp - arr[i] + arr[i + k];
		max = Math.max(temp, max);
	}
	return max;
}

const arr1 = [2, 55, 3, 1, 11, 7, 6, 4];
const k1 = 3;
console.log(maxSubarraySum(arr1, k1));
