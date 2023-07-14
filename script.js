'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = ()
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// STATIC METHOD
Person.hey = function () {
  console.log('Hey there 🖐');
  console.log(this);
};
Person.hey();

////////////////////////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jack.calcAge();
jonas.calcAge();

console.log(jonas.__proto__ === Person.prototype);

// object can inherit properties from the constructor function
Person.prototype.species = 'Homo sapiens';
console.log(jonas.species);

// we can check if a property is owned by the object or inherited from constructor function
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
console.log(jonas);

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// Prototypal inheritance in built-in objects
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

// prototype in functions
console.dir(x => x + 1);

// Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};
bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();
console.log(bmw instanceof Car);
console.log(mercedes instanceof Car);

///////////////////////////////////////////////////////
// ES6 CLASSES
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens i.e they can be passed into functions and returned from a function
// 3. Classes are executed in strict mode

// class expression
// const PersonCl = class {

// }

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 🖐');
    console.log(this);
  }
}

// const kunbi = new PersonCl('Kunbraka', 1993);
// console.log(kunbi);
// console.log(kunbi.__proto__ === PersonCl.prototype);
// console.log(kunbi instanceof PersonCl);
// kunbi.calcAge();
// console.log(kunbi.age);

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);
// console.log(jessica instanceof PersonCl);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// const walter = new PersonCl('Walter');
PersonCl.hey();

// SETTER AND GETTERS
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

/////////////////////////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////////////////////////
// Coding Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/hr`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/hr`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUs = 50;
console.log(ford);

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is moving at ${this.speed}km/hr`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is moving at ${this.speed}km/hr`);
//   }

//   get speedUs() {
//     return `${this.speed / 1.6}mi/h`;
//   }

//   set speedUs(speed) {
//     return `${speed}mi/h`;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford);
// console.log(ford.__proto__ === CarCl.prototype);
// ford.accelerate();
// ford.brake();
// console.log(CarCl.speedUs);
// CarCl.speedUs = this.speed * 1.6;
// console.log(CarCl.speed);
