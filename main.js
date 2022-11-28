function add (a, b) {
  return a + b;
}

console.log(add(5, 6));

function subtract (a, b) {
  return a - b;
}

console.log(subtract(5, 6));

function multiply (a, b) {
  return a * b;
}

console.log(multiply(5, 6));

function divide (a, b) {
  return a / b;
}

console.log(divide(12, 6));

function operate (operator, a, b) {
  return operator(a, b);
}

console.log(operate (subtract, 10, 5));