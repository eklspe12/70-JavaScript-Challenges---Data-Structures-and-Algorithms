const Stack = require('./stack');

function balancedParenthesis(str) {
	const stack = new Stack();
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			stack.push(str[i]);
		}
		if (str[i] === ')') {
			if (stack.isEmpty()) {
				return false;
			} else {
				stack.pop();
			}
		}
	}
	if (stack.isEmpty()) {
		return true;
	} else {
		return false;
	}
}

console.log(balancedParenthesis('(()))'));

module.exports = balancedParenthesis;

// function takes in a str
//      create a stack
//      iterate over string
//          if character is open, push
//          if closed and stack size < -1 pop
//              else return false
//          return true
