const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 32,
    email: 'steve@gmail.com',
    hobbies: ['sport', 'music'],
    address: {
        city: 'London'
    },
    getBirthYear: function () {
        return 2019 - this.age;
    }
};

let val;


val = person;
console.log(val);
val = person.firstName;
console.log(val);
val = person['lastName'];
console.log(val);
console.log(person.getBirthYear());


