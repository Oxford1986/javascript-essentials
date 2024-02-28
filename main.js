// traditional function

function add(a, b) {
  return a + b;
}

console.log(add(3, 4));

// add to variable

const x = function multiply(a, b) {
  return a * b;
};

console.log(x(4, 6));

// arrow function

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(7, 2));

// arrow function (one line)

const divide = (a, b) => a / b;

console.log(divide(15, 5));
