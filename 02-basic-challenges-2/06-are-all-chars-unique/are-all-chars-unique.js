function areAllCharactersUnique(str) {
	let strArr = str.split('');
	let uniques = [];
	for (i = 0; i < strArr.length; i++) {
		if (!uniques.includes(strArr[i])) {
			uniques.push(strArr[i]);
		} else {
			return false;
		}
	}
	return true;
}

// funciton takes in a str
//      str is split so all characters are elements
//      create array for uniques
//      str array is iterated over
//          if unique arr doesn't contain element add it
//              else return false
//          return true
//

module.exports = areAllCharactersUnique;
