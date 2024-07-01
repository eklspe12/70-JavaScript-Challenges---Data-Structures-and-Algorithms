function analyzeCarMileage(arr) {
	let highestMileageCar = { make: '', model: '', year: 0, mileage: 0 };
	let lowestMileageCar = { make: '', model: '', year: 0, mileage: 1000000 };

	arr.forEach((car) => {
		if (car.mileage < lowestMileageCar.mileage) {
			lowestMileageCar = car;
		}
		if (car.mileage > highestMileageCar.mileage) {
			highestMileageCar = car;
		}
	});
	let totalMileage = arr.reduce((sum, car) => {
		return sum + car.mileage;
	}, 0);
	let averageMileage = totalMileage / arr.length;
	return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

// function takes in an array of objects
//
module.exports = analyzeCarMileage;
