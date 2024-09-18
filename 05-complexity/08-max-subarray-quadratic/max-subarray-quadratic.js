function maxSubarraySum(arr, k) {
	let maxSum = 0;
	for (i = 0; i <= arr.length - k; i++) {
		let tempSum = 0;
		for (j = i; j < i + k; j++) {
			tempSum = tempSum + arr[j];
		}
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}
	console.log(maxSum);
}

maxSubarraySum([1, 30, 5, 7, 8, 4, 200], 3);

module.exports = maxSubarraySum;

// declare function that takes in array and integer as arguments
//      declare varibale to hold highest sum
//      loop through each item of array
//              create temp sum
//              loop again = to k to add next numbers to tempsum
//              maxsum = tempsum if temp > max
// return max
