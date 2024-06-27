function formatPhoneNumber(arr) {
	let formattedNumber = `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
	return formattedNumber;
}

// funciton takes in array of numbers
//      create var to hold arr as string
//      return var

module.exports = formatPhoneNumber;
