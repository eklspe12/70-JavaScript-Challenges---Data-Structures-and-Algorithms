function phoneNumberDirectory(arr) {
	let contacts = [];
	for (const name of arr) {
		contacts.push(name.split(':'));
	}
	let contactMap = new Map();
	for (const person of contacts) {
		contactMap.set(person[0], person[1]);
	}
	return contactMap;
}

console.log(
	phoneNumberDirectory([
		'John:123-456-7890',
		'Jane:987-654-3210',
		'Joe:555-555-5555',
	])
);

// function takes in an array of names and phone numbers
//      declare a new array that splits the names from the phone numbers
//      declare a new map to hold data
//      run a for loop of the new array to set each name and number in the new map
//      return the new map
module.exports = phoneNumberDirectory;
