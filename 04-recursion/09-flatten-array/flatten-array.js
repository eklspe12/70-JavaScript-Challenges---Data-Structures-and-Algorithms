function flattenArray(arr) {
	let result = [];
	for (const item of arr) {
		if (Array.isArray(item)) {
			result = result.concat(flattenArray(item));
		} else {
			result.push(item);
		}
	}
	return result;
}
console.log(flattenArray([1, 5, 3, 6, 2, [1, 3, 2], 3, 5]));
module.exports = flattenArray;

// function takes in array of arrays to be combines into one array
//      declare result variable to be new array
//      iterate over original array to check if each element is an array or not
//      if an element is an array, recursively run the function until it isn't
//      otherwise push the item into the array
// return result array
