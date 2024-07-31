// 1. do...while loop
// Syntax

// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 5);

// 2. for...in loop
// Example

// const user = {
// 	name: 'John',
// 	age: 30,
// 	occupation: 'Developer',
// };

// for (let key in user) {
// 	console.log(`${key} : ${user[key]}`);
// }

// 3. for...of loop

// const numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
// 	console.log(number);
// }

// 4. Array.prototype.map()

// const newArr = array.map(function)
const nums = [1, 2, 3, 4, 5];
const numsDoubled = nums.map((num) => num * 2);
console.log(numsDoubled);

const users = [
	{ firstName: 'john', lastName: 'Doe' },
	{ firstName: 'Jane', lastName: 'smith' },
	{ firstName: 'emIly', lastName: 'JoHnson' },
];

function capitalizeFirstLetter(name) {
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

const formattedUsers = users.map((user) => {
	firstName = capitalizeFirstLetter(user.firstName);
	lastName = capitalizeFirstLetter(user.lastName);
	return {
		firstName: firstName,
		lastName: lastName,
	};
});

console.log(formattedUsers);

for (let user of formattedUsers) {
	console.log(user.firstName);
}

console.table(formattedUsers);
