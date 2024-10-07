function nonrepeat(str) {
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
			return str[i];
		}
	}
	return null;
}

console.log(nonrepeat('aabbccdeeffgg'));
console.log(nonrepeat('aabbcc'));
