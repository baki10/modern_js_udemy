const today = new Date();

console.log(today);
console.log(typeof today);

let birthday = new Date('8-3-1987 11:25:00');
console.log(birthday);

birthday = new Date('August 3 1987 11:25:00');
console.log(birthday);

birthday = new Date('8/3/1987 11:25:00');
console.log(birthday);

console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());