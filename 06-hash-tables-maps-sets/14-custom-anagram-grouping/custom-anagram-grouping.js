const HashTable = require('./HashTable');

function anagramGrouping(words) {
	const anagrams = new HashTable();
	for (const word of words) {
		let sorted = word.split('').sort().join('');
		if (!anagrams.has(sorted)) {
			anagrams.set(sorted, [word]);
		} else {
			anagrams.get(sorted).push(word);
		}
	}
	return anagrams.getValues();
}

module.exports = anagramGrouping;

// function takes in string
//      create an array to hold each word as a string without caps or punctuation
//      create a hash table to hold values
//          run for loop on array for each word
//          if '' continue
//          if sorted word is not in hashtable, add it and the original word as an array
//          if sorted is in array, add original word to value array
//      get values of hash tables
//  return values of hashtable
