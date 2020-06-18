// 1.Use Strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2.Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'hong';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// var no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
//--상수 - immutable
// let - mutable
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const dayInWeek = 7; const maxNumber = 5;
// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
// 4. Variable types
// Primitive, single item; number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function

const count = 17;// integer
const size = 17.1;// decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// bigInt (fairly new, don't use it yet)
const bigInt = 123123123123123123123123123123123123n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// String
const char = 'c';
const brendan = 'brandan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (String)
console.log(`value: ${helloBob}, type: ${typeof hellBob}`);

// Boolean
// false: 0, null, undefined, NaN, ' '
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

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${test}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: &{text}, type: ${typeof text}`);
//console.log(text.charAt(0));

// object, real-life object, data structure
const hong = { name: 'hong', age: 20 };
hong.age = 21;
console.log(`value: ${text}, type: ${typeof text}`);