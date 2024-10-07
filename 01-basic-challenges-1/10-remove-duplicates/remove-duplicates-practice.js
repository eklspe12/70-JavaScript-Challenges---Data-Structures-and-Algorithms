function remove(arr) {
	let originals = [];
	for (const item of arr) {
		if (!originals.includes(item)) {
			originals.push(item);
		}
		continue;
	}
	return originals;
}

console.log(remove([1, 4, 2, 6, 8, 5, 3, 1, 3, 4, 6, 8, 9]));
