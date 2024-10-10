const Stack = require('./stack');

function balanceParenthesis(str) {
	const stack = new Stack();
	for (const char of str) {
		if (char === '(') {
			stack.push(char);
		} else if (char === ')') {
			if (stack.isEmpty()) {
				return false;
			} else stack.pop();
		}
	}
	if (stack.top !== -1) {
		return false;
	} else {
		return true;
	}
}

console.log(balanceParenthesis('(())'));
console.log(balanceParenthesis('((())'));
console.log(balanceParenthesis('(()))'));
