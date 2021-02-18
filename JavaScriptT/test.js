'use strict';
const target = document.querySelector('#testTarget');
const result = document.querySelector('#testResult');

function changeResult(length) {
  if (length === undefined) {
    length = 0;
  }
  result.innerHTML = length;
}

function handleType(event) {
  target.addEventListener('change', () => {
    const text = target.value;
    console.log(text);
    const string = text.split('');
    let length = 0;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (escape(char).length > 4) {
        length += 2;
      } else {
        length++;
      }
    }
    changeResult(length);
  });
} asdasd

function init() {
  changeResult();
  handleType();
}

init();