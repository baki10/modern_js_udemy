class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  static addNumbers(a, b) {
    return a + b;
  }
}

class Customer extends Person {
  constructor(f, l, d, phone) {
    super(f, l, d);
    this.phone = phone;
  }
}

const mary = new Person('Mary', 'Johns', '08-03-1987');
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());


const baki = new Customer('Baki', 'Goal', '08-03-1987', '89092222222');
console.log(baki);
console.log(baki.greeting());
console.log(baki.calculateAge());

// static
console.log('2 + 3 = ', Person.addNumbers(2, 3));
console.log('1 + 7 = ', Customer.addNumbers(1, 7));


