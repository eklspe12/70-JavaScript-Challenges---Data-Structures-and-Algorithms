function arrayIntersection(arr1, arr2) {
	let duplicateArray = [];
	for (i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			duplicateArray.push(arr1[i]);
		}
	}
	return duplicateArray;
}

arrayIntersection([1, 2, 3, 4], [1, 3, 5, 6]);
arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
arrayIntersection([10, 20, 30], [30, 40, 50]);
arrayIntersection([1, 2, 3], [4, 5, 6]);

// function takes in two arrays
//      new array is created to hold duplicates
//      one array is looped through to check if any of the elements are included in other array
//          any same elements are added to a new array
//      new array is returned

module.exports = arrayIntersection;
