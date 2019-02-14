const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Simpson';
mary.age = 30;

console.log(mary);

console.log(mary.greeting());