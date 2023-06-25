const friend = ['bhakti', 'diya', 'anshu'];
const newLenght = friend.push('krisha');
console.log(friend);
console.log(newLenght);
friend.unshift('hirva');//add elements in the startings
console.log(friend);
//remove elements
friend.pop();//last elements
const pooped = friend.pop();//last element removed
console.log(pooped);
friend.shift();//remove first element
console.log(friend);
console.log(friend);
console.log(friend.indexOf('diya'));
console.log(`the index of the stiven is ${friend.indexOf('diya')}`);
console.log(friend.indexOf('bob'));
console.log(friend.includes('diya'));//give true flse value of the function
console.log(friend.includes('bob'));

if (friend.includes('hirva')) {
    console.log("there is no friend😘");
}

if (friend.includes('diya')) {
    console.log("there is no friend😘");
}

