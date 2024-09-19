function wordFrequencyCounter(string) {
	let cleanStrings = string
		.replace(/[^\w\s]/g, '')
		.toLowerCase()
		.split(' ');
	const wordCount = new Map();
	for (const word of cleanStrings) {
		if (wordCount.has(word)) {
			wordCount.set(word, wordCount.get(word) + 1);
		} else {
			wordCount.set(word, 1);
		}
	}
	return wordCount;
}

console.log(wordFrequencyCounter('This is my string and this is the words.'));

module.exports = wordFrequencyCounter;

//  function takes in a senctence as a string
//      variable is declared to store the instances of each word and their occurences
//      string is converted to lower case without punctuation
//      create new map to hold keys and values
//      split the string and add each key value pair to an array
//          for loop of array to iterate through each kery value, adding them to a map
