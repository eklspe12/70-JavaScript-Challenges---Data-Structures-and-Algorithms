function symmetricDifference(arr1, arr2) {
	const results = new Set(arr1);
	const set2 = new Set(arr2);
	for (const value of set2) {
		if (results.has(value)) {
			results.delete(value);
		} else {
			results.add(value);
		}
	}
	let resultArray = Array.from(results);
	return resultArray;
}

module.exports = symmetricDifference;

// function takes in two arrays
//      Create sets for each array and an array to hold nonduplicates
//      iterate through second set to see if any values are in arr1
//          if so, delete from results array
//          else add to results array
// return results array
