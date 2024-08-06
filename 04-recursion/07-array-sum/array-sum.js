function arraySum(array) {
	if (array.length === 1) {
		return array[0];
	} else if (array.length <= 0) {
		return 0;
	}
	return array[0] + arraySum(array.slice(1));
}

console.log(arraySum([-1, -2, -3, -4, -5]));

module.exports = arraySum;

//function takes in an array
//  base case is when array length equals 1, returns array element
//  second base case when arr length equals 0, return 0
// return array element 1 + recursive function with array slice(1) passed in
