function phoneNumberDirectory(arr) {
	const phoneBook = new Map();
	for (const item of arr) {
		let split = item.split(':');
		phoneBook.set(split[0], split[1]);
	}
	return phoneBook;
}

console.log(
	phoneNumberDirectory([
		'John:123-456-7890',
		'Jane:987-654-3210',
		'Joe:555-555-5555',
	])
);
