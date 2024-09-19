const nameMap = new Map([
	[1, 'John'],
	[2, 'Jane'],
	[3, 'Joe'],
]);

const myFunction = () => {};
const emptyObj = {};
const map2 = new Map([
	['name', 'John'],
	[1, 'number one'],
	[true, 'really true'],
	[null, 'null'],
	[myFunction, 'empty function'],
	[emptyObj, 'empty object'],
]);

nameMap.set(4, 'Jack');
nameMap.set(5, 'Jill');

for (const [key, value] of nameMap) {
	console.log(key, value);
}
