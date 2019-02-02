const numbers = [12, 34, 5, 12, 32, 91, 67, 3];
const numbers2 = new Array(22, 11, 33, 44);
const fruits = ['banana', 'apple', 'orange'];
const mixed = ['Hello', 42, true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

console.log(numbers.length);

console.log(Array.isArray(numbers));
console.log(Array.isArray('not an array'));

console.log(numbers[3]);
numbers[3] = 444;
console.log(numbers);
// find
console.log(numbers.indexOf(444));

// add
// end
numbers.push(999);
console.log(numbers);
// front
numbers.unshift(777);
console.log(numbers);

// remove
// end
numbers.pop();
console.log(numbers);
//front
numbers.shift();
console.log(numbers);

// splice
numbers.splice(1, 4);
console.log(numbers);

// find
function under30(num) {
    return num < 30;
}
console.log(numbers.find(under30));

// reverse
numbers.reverse();
console.log(numbers);

// concat
console.log(numbers.concat(numbers2));

// sort
let sorter = function (x, y) {
    return x - y;
};
console.log(numbers.sort(sorter));
