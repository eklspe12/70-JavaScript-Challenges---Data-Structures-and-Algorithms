const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const mapNumbers = numbers.map((num) => {
	num * 2;
});

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const filteredArray = numbers.filter((num) => {
	return num < 3;
});

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const reducedArray = numbers.recude((total, num) => {
	return total + num;
}, 0);
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
const forEachArray = numbers.forEach((num) => {
	console.log(num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const find = numbers.find((num) => num > 4);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const some = numbers.some((num) => num < 1);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const every = numbers.every((num) => num < 0);
