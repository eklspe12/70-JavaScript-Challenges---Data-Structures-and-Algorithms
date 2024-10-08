function permutations(str) {
	let results = [];
	if (str.length === 0) {
		results.push('');
		return results;
	}
	for (let i = 0; i < str.length; i++) {
		let first = str[i];
		let rest = str.slice(0, i) + str.slice(i + 1);
		let subPermutations = permutations(rest);

		for (let j = 0; j < subPermutations.length; j++) {
			results.push(first + subPermutations[j]);
		}
	}
	return results;
}

console.log(permutations('cat'));
