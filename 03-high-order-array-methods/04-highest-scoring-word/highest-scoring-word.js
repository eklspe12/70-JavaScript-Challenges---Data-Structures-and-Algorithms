function highestScoringWord(str) {
	let wordsArr = str.split(' ');
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let leader = { word: '', score: 0 };
	for (i = 0; i < wordsArr.length; i++) {
		let total = 0;
		wordsArr[i].split('').forEach((char) => {
			total = total + alphabet.indexOf(char);
		});
		if (total > leader.score) {
			leader.word = wordsArr[i];
			leader.score = total;
		}
	}
	return leader.word;
}

highestScoringWord('my name is spencer');

//function takes in a string
//      new array is made by splitting the words of str
//      var that holds alphabet as a string to be indexed
//      for loop for each member of array
//          each letter of current string is indexed against var and number added to count
//              count compared to current leader to see if it is replaced
//      current leader is returned

module.exports = highestScoringWord;
