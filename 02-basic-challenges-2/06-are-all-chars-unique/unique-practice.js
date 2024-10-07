function unique(str) {
	let uniques = [];
	for (let i = 0; i < str.length; i++) {
		if (!uniques.includes(str[i])) {
			uniques.push(str[i]);
		} else {
			return false;
		}
	}
	return true;
}

console.log(unique('hello'));
console.log(unique('abcdefg'));
