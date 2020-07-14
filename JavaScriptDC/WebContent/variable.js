/* 1. Use strict
added in ES 5
use this for Vanila JavaScript */
"use scrict";

/* 2. Variable
let (added in ES6)
mutable */

let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);

/* var (don't ever use this!) */
/* var hoisting (move declaration from bottom to top) */
/* has no block scope */
{
  age = 4;
  var age;
}
console.log(age);

/* 3. Constants
favor immutable date type always for a few reasons;
 - security
 - thread safety
 - reduce human mistakes */

const daysInWeek = 7;
const maxNumber = 5;

/* 4. Variable types
 primitive, single item: number, string, boolean, null, undefined, symbol, object, box container
 function, first-class function */

const count = 17; /* integer */
const size = 17.1; /* decimal number */
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

/* number - special numeric value: infinity, -infinity, NaN */
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

/* bigInt (fairly new, don't use it yet) */
const bigInt = 1234567890123456789012345678901234567890123456789012345678901234567890n; /* over (-2^53)~2^53 */
console.log(`value: ${bigInt} type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

/* string */
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; /* template literals (string) */
console.log(`value ${helloBob}, type: ${typeof helloBob}`);

/* boolean
false: 0, null, undefined, NaN, ''
true: any other value */
const canRead = true;
const test = 3 < 1; /* false */
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

/* null */
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
/* undefined */
let x;
console.log(`value: ${x}, type: ${typeof x}`);
