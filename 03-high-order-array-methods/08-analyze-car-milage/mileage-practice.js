function mileageAverages(arr) {
	let results = {
		averageMileage: 0,
		highestMileageCar: { make: '', model: '', year: 0, mileage: 0 },
		lowestMileageCar: arr[0],
		totalMileage: 0,
	};
	let total = 0;
	for (const car of arr) {
		total = total + car.mileage;
		if (car.mileage > results.highestMileageCar.mileage) {
			results.highestMileageCar = car;
		} else if (car.mileage < results.lowestMileageCar.mileage) {
			results.lowestMileageCar = car;
		}
	}
	let average = total / arr.length;
	results.averageMileage = average.toFixed(2);
	results.totalMileage = total;
	return results;
}

console.log(
	mileageAverages([
		{ make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
		{ make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
		{ make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
	])
);
