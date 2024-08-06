function countDown(num) {
	if (num <= 0) {
		console.log('All done!');
		return;
	} else {
		console.log(num);
		num--;
		countDown(num);
	}
}

countDown(7);
module.exports = countDown;
