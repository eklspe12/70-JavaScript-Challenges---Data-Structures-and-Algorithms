function reverse(str) {
	let reverse = '';
	for (let i = str.length - 1; i > -1; i--) {
		reverse = reverse + str[i];
	}
	return reverse;
}

console.log(reverse('hello'));
