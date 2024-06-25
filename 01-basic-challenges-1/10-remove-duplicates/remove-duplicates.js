function removeDuplicates(array) {
	let set = new Set(array);
	let noDuplicates = Array.from(set);
	return noDuplicates;
}

removeDuplicates([1, 3, 4, 6, 3, 2, 1]);
module.exports = removeDuplicates;
