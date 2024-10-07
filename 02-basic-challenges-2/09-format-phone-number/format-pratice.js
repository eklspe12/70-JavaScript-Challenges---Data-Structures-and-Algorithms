function phoneNumber(arr) {
	return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}

console.log(phoneNumberTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function phoneNumberTwo(arr) {
	let area = arr.slice(0, 3).join('');
	let prefix = arr.slice(3, 6).join('');
	let end = arr.slice(6).join('');
	return `(${area}) ${prefix}-${end}`;
}
