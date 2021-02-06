//  1. Use Strict
'use strict';

// 2. Variable, rw(read/write)
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

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

// Note!
// Immutable data types: primitive types, frozen object (i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
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
/* console.log('value: ' + helloBob + ', type: ' + typeof helloBob); */

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;// false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// simbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const man = { name: 'man', age: 30 };
man.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
/* console.log(`value: ${}, type: ${typeof }`); */
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // Uncaught TypeError