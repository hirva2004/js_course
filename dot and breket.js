const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt['What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'];
//console.log(interestedIn);
console.log(jonas[interestedIn]);
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("wrong request");
}
jonas.location = 'portugal';
jonas['twitter'] = '@jonassteam';
console.log(jonas);
console.log(`${jonas.firstName}has ${jonas.friends.length}friendsa,and bestfriends is called ${jonas.friends[0]}`)
