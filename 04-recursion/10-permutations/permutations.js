function permutations(str) {
	let result = [];
	if (str.length === 0) {
		result.push('');
		return result;
	}
	for (let i = 0; i < str.length; i++) {
		const first = str[i];
		const rest = str.slice(0, i) + str.slice(i + 1);
		const perm = permutations(rest);

		for (let j = 0; j < perm.length; j++) {
			result.push(first + perm[j]);
		}
	}
	return result;
}
permutations('abc');

module.exports = permutations;

// function takes in a str to be rearranged in every combination
//      create variable to store permutations
//      create array to hold each element of the string
//      iterate through the element array making combinations of letters
//          if combination is not in result, add it
//          otherwise return
//  return resullt array
