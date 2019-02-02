const cars = ['ferrari', 'bmw', 'mercedes', 'lada', 'toyota'];

// for
console.log('--- for loop ---');
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car);
}

// for each
console.log('--- for each loop ---');
cars.forEach(function(car, index) {
    console.log(index, car);
});

// map
const users = [
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:3, name:'Smith'}
];
console.log('--- map ---');
const ids = users.map(function(user){
    return user.id;
});
console.log(ids);

// for in
const user = {
    first: 'John',
    last: 'Doe',
    age: 42
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}