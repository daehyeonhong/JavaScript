/* 1. String concatenation */
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

/* 2. Numeric operators */
console.log(1 + 1); /* add */
console.log(1 - 1); /* substract */
console.log(1 / 1); /* divide */
console.log(1 * 1); /* multiply */
console.log(5 % 2); /* remainder */
console.log(2 ** 3); /* exponentiation */

/* 3. Increament and Decrement operators */
let counter = 2;
const preIncrement = ++counter;
/* counter=counter+1;
preIncrement=counter; */
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`);

/* 4. Assignment operators */
let x = 3;
let y = 6;
x += y; /* x = x + y */
x -= y;
x *= y;
x /= y;

/* 5. Compairson operators */
console.log(10 < 6); /* less than */
console.log(10 <= 6); /* less than or equal */
console.log(10 > 6); /* greater than */
console.log(10 >= 6); /* greater than or equal */

/* 6. Logical operators: || (or), && (and), ! (not) */
const value1 = false;
const value2 = 4 < 2;

/* || (or), finds the first truthy value */
console.log(`or: ${value1 || value2 || check()}`);

/* && (and), finds the first falsy value */
console.log(`and: ${value1 && value2 && check()}`);

/* often used to compress long if-statment
nullAbleObject && nullAbleObject.something */
/*if (nullAbleObject != null) {
  nullAbleObject.something;
}*/

function check() {
  for (let i = 0; i < 10; i++) {
    /* wasting time */
    console.log('😱');
  }
  return true;
}

/* !(not) */
console.log(!value1);

/* 7. Equality */
const stringFive = '5';
const numberFive = 5;

/* == loose equality, with type conversion */
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

/* === strict equality, no type conversion */
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

/* object equality by reference */
const hong1 = { name: 'hong' };
const hong2 = { name: 'hong' };
const hong3 = hong1;
console.log(hong1 == hong2);
console.log(hong1 === hong2);
console.log(hong1 === hong3);

/* equlity - puzzler */
console.log(0 == false); /* true - o */
console.log(0 === false); /* false - o */
console.log('' == false); /* true - o */
console.log('' === false); /* false - o */
console.log(null == undefined); /* true - o */
console.log(null === undefined); /* false - o */

/* 8. Conditional operators: if
if, else if, else */
const name = 'hong';
if (name === 'hong') {
  console.log(`Welecome ${name}!`);
} else if (name === 'coder') {
  console.log(`You are amazing coder`);
} else {
  console.log('unknown');
}

/* 9. Ternary operator: ?
condition ? value1 : value2; */
console.log(name === 'hong' ? 'yes' : 'no');

/*10. Switch statement
use for multiple if checks
use for enum-like value check
use for multiple type checks in TS*/
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('Chrome');
    break;
  case 'Firefox':
    console.log('Firefox');
    break;
  default:
    console.log('same all!');
    break;
}

/* 11. Loops
whie loop, while the condition is truthy,
body code is excuted */
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

/* do while loop, body code is executed first
then check the CSSConditionRule. */
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

/* for loop, for(begin; condition; step) */
for (i = 3; i < 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i < 0; i -= 2) {
  /* inline variable declation */
  console.log(`inline variable for: ${i}`);
}

/* nested loops */
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, k: ${j}`);
  }
}

/*break, continue*/
/* Q1. iterate from 0 to 10 and print only even numbers(use continue) */
for (let h = 0; h <= 10; h++) {
  if (h % 2 == 0) {
    console.log(h);
    console.log(`Q1. ${h}`);
  } else {
    continue;
  }
}
/* Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break) */
for (let h = 0; h <= 10; h++) {
  if (h > 8) {
    break;
  }
  console.log(h);
  console.log(`Q2. ${h}`);
}
