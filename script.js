// You have an users object in the users.js file, do not change this file. Write your code in script.js.

// 1.
// Get all keys or properties of users object. Print them out.

// 2.
// Get all the values of users object. Print them out.

// 3.
// Get the length of this object.

// 4.
// Find the person who has most skills in the users object.

// 5.
// Count users having greater than or equal to 50 points from the following object.

// 6.
// Find people who are MERN stack developer from the users object. Print out number of MERN users and their names.

// 7.
// Set your name in the users object without modifying the original users object.

// 8.
// Add a method for all users to print a string like:
// “Asab is 25 years old. He knows ‘HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor’.”

//=================================================================================================================

console.log(Object.keys(users));

console.log('=============================================');

//=================================================================================================================

console.log(Object.values(users));

console.log('=============================================');

//=================================================================================================================

console.log(Object.keys(users).length);

console.log('=============================================');

//=================================================================================================================

console.log(
	Object.entries(users).sort(
		(a, b) => b[1].skills.length - a[1].skills.length,
	)[0][0],
);

console.log('=============================================');

//=================================================================================================================

console.log(Object.values(users).filter((name) => name.points >= 50).length);

console.log('=============================================');

//=================================================================================================================

console.log(
	Object.entries(users)
		.filter(
			(name) =>
				name[1].skills.includes('MongoDB') &&
				name[1].skills.includes('Node') &&
				name[1].skills.includes('React') &&
				name[1].skills.includes('Express'),
		)
		.map((name) => name[0]),
	Object.entries(users).filter(
		(name) =>
			name[1].skills.includes('MongoDB') &&
			name[1].skills.includes('Node') &&
			name[1].skills.includes('React') &&
			name[1].skills.includes('Express'),
	).length +
		' ' +
		'MERN Users',
);

console.log('=============================================');

//=================================================================================================================

users.Mustafa = {
	email: 'mustafa@mustafa.com',
	skills: [
		'HTML',
		'CSS',
		'JavaScript',
		'Redux',
		'MongoDB',
		'Express',
		'React',
		'Node',
	],
	age: 35,
	isLoggedIn: false,
	points: 50,
};

//=================================================================================================================

users.getInfo = function () {
	for (user in users) {
		if (user !== 'getInfo') {
			console.log(
				`${user} is ${users[user].age} years old. He knows ${users[
					user
				].skills.join(', ')}.`,
			);
		}
	}
};

users.getInfo();
