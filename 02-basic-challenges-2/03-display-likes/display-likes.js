function displayLikes(arr) {
	let message = '';
	if (arr.length == 0) {
		message = `no one likes this`;
	} else if (arr.length === 1) {
		message = `${arr[0]} likes this`;
	} else if (arr.length === 2) {
		message = `${arr[0]} and ${arr[1]} like this`;
	} else if (arr.length === 3) {
		message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
	} else if (arr.length > 3) {
		message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
	}

	console.log(message);
	return message;
}

displayLikes([]);
displayLikes(['Peter']);
displayLikes(['Jacob', 'Alex']);
displayLikes(['Max', 'John', 'Mark']);
displayLikes(['Alex', 'Jacob', 'Mark', 'Max']);
displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']);

// function takes in array
//      create new array to hold names of anyone who liked post
//      iterate through old array to check for likes
//      add any likes to new array
//      join array with a space between names
//      return array

// const displayLikes = require('./display-likes');

// test('Display Likes', () => {
//   expect(displayLikes([])).toEqual('no one likes this');
//   expect(displayLikes(['Peter'])).toEqual('Peter likes this');
//   expect(displayLikes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
//   expect(displayLikes(['Max', 'John', 'Mark'])).toEqual(
//     'Max, John and Mark like this'
//   );
//   expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
//     'Alex, Jacob and 2 others like this'
//   );
//   expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill'])).toEqual(
//     'Alex, Jacob and 3 others like this'
//   );
// });

// write a function called `displayLikes` that takes in an array of names and returns a string of who likes the post.

// The function should return a string formatted as follows:

// - If no one likes it, it should return `'no one likes this'`
// - If one person likes it, it should return `'{name} likes this'`
// - If two people like it, it should return `'{name1} and {name2} like this'`
// - If three people like it, it should return `'{name1}, {name2} and {name3} like this'`
// - If more than three people like it, it should return `'{name1}, {name2} and {x} others like this'`
module.exports = displayLikes;
