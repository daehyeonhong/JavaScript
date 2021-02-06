//  1. Use Strict
'use strict';

// 2. Variable
// Mutable
// let (added in ES6)

let globalName = 'Global Name';

{
  let name = 'hong';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move, declaration from bottom to the top)
// has no block scope

console.log(age);
{
  age = 4;
  console.log(age);
  var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN(Not a Number)

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 91237491273401723905817230947123904723413241253n;
// over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brenden = 'brenden';
const greeting = 'Hello, ' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `Hi ${brenden}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);