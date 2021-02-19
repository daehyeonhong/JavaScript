'use strict';

// Q1. make a String out of an Array
{
  const fruits = ['apple', 'banana', 'orange'];

  // A1.
  fruits.forEach(element => console.log(fruits));
  const result = fruits.join();
  console.log(result);
}

// Q2. make an Array out of a String
{
  const fruits = '🍎,🥝,🍌,🍒';

  // A2.
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  // A3.
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // A4.
  /* const result = array.splice(2, 4); */
  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
{
  /* let result = students.find((item, index) => { return item.score === 90; }); */
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

console.clear();
// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}
{
  const result = !students.every((student) => student.score >= 50);
  console.log(result);
}

console.clear();
// Q9. copute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the score
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending other
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.
    map((student) => student.score)
    .sort((prev, curr) => prev - curr)
    .join();
  console.log(result);
}