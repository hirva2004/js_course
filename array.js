//const will change primitive value
const friend = ['nidhi', 'miloni', 'dhruvi'];
console.log(friend);
const years = new Array(101, 2004, 2009, 9090);
console.log(friend[0]);
console.log(friend[2]);
console.log(friend.length);
console.log(friend[friend.length - 1]);
friend[2] = 'maitry';
console.log(friend);
const firstname_a = 'hirva';
const hirva = [firstname_a, 'mehta', 2023 - 2004, 'student', friend];
console.log(hirva);
console.log(hirva.length);
//exercise
const calcAge3 = function (birthyear) {
    return 2037 - birthyear;
}
const years_a = new Array(101, 2004, 2009, 9090);
console.log(calcAge3(years_a));
const age1 = calcAge3(years[0]);;
const age2 = calcAge3(years[1]);
const age3 = calcAge3(years.length - 1);
console.log(age1, age2, age3);
const ages = [calcAge3(years[0]), calcAge3(years[1]), calcAge3(years.length - 1)];
console.log(ages);


