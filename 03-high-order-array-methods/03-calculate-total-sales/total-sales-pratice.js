function totalSales(arr, tax) {
	let itemTotals = [];
	arr.forEach((item) => {
		let pretax = item.price * item.quantity;
		let taxed = pretax * tax;
		itemTotals.push(pretax + taxed);
	});
	return itemTotals.reduce((total, nums) => {
		return total + nums;
	}, 0);
}

const products = [
	{ name: 'Apple', price: 0.5, quantity: 10 },
	{ name: 'Banana', price: 0.3, quantity: 20 },
	{ name: 'Orange', price: 0.6, quantity: 15 },
];

console.log(totalSales(products, 0.05));
