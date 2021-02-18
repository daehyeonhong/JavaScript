'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {};/* 'object literal' syntax */
const obj2 = new Object();/* 'object constructor' syntax */
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const man = { name: 'mann', age: 4 };
print(man);

// with JavaScript magic (dynamically typed language)
// can add properties later
man.hasJob = true;
console.log(man.hasJob);

// can delete properties later
delete man.hasJob;
console.log(man.hasJob);

// 2. Computed properties
// key should be always string
console.log(man.name);
console.log(man['name']);
man['hasJob'] = true;
console.log(man.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(man, 'name');
printValue(man, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = Person('mann', 30);
console.log(person4);

// 4. Constructro Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.clear();
console.log('name' in man);
console.log('age' in man);
console.log('random' in man);
console.log(man.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (const key in man) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'man', 'age': '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object.assign
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);