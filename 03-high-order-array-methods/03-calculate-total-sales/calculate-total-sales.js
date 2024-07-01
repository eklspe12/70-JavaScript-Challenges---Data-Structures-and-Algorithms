function calculateTotalSalesWithTax(products, tax) {
	let sumArray = products.map((p) => {
		return p.price * p.quantity * (1 + tax / 100);
	});
	return sumArray.reduce((total, sum) => {
		return total + sum;
	}, 0);
}

calculateTotalSalesWithTax(
	[
		{ name: 'Apple', price: 0.5, quantity: 10 },
		{ name: 'Banana', price: 0.3, quantity: 20 },
		{ name: 'Orange', price: 0.6, quantity: 15 },
	],
	8
);

// function takes in products and taxrate
//      create const to hold new array of forEach with the quantity multiplied by the cost
//      add all together and multiply by tax rate
module.exports = calculateTotalSalesWithTax;
