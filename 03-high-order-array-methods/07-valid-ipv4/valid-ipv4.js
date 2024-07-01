const isValidIPv4 = (str) => {
	let numArr = str.split('.');
	if (numArr.length !== 4) {
		return false;
	}
	return numArr.every((num) => {
		let number = parseInt(num);
		return number >= 0 && number <= 255 && number.toString() === num;
	});
};

isValidIPv4('12.12.12.12');

//function takes in a string
//      string is split into an array by . location
//          each str in array is checked to see if it's between 1-255
//          true or false based on result

module.exports = isValidIPv4;
