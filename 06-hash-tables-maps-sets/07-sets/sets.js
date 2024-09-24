const nameSet = new Set(['John', 'Jane', 'Joe', 'Jane', 'Joe']);

console.log(nameSet);

nameSet.add('Jack');

nameSet.add('Jill');

console.log(nameSet);

console.log(nameSet.has('Jill'));

nameSet.delete('Jack');

console.log(nameSet);

console.log(nameSet.size);

console.log(nameSet.values());

for (const value of nameSet) {
	console.log(value);
}

const nameArray = Array.from(nameSet);
console.log(nameArray);

const newSet = new Set(nameArray);
console.log(newSet);
