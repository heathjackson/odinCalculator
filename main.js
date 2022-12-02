

let number = document.querySelectorAll('.number');
let opera = document.querySelectorAll('.opera');
const equal = document.getElementById('equals');
const clear = document.getElementById('clear');
const display = document.getElementById('display')
const decimal = document.getElementById('decimal')

let numArray = [];
let joinedArray1 = [];
let joinedArray2 = [];
let op = '';

decimal.addEventListener('click', () => {
  if (numArray.length === 0 || numArray.includes('.') == false) {
    numArray.push('.');
    console.log(numArray);
  }
  else {
    decimal.removeEventListener;
  } 
});

for (const numBtn of number) {
  numBtn.addEventListener('click', () => {
    if ((joinedArray1.length !== 0) && (joinedArray2.length !== 0) 
    && (numArray.length !== 0)) {
      numArray = [];
      joinedArray1 = [];
      joinedArray2 = [];
      display.innerHTML = 0;
    }

    num = numBtn.textContent;
    numArray.push(num);
    arrayCombined();
    console.log({numArray});
    console.log({joinedArray2});
    console.log({joinedArray1});
  });
}

for (const ope of opera) {
  ope.addEventListener('click', () => {
    operators(ope);
  });
}

//makes equal button work

equal.addEventListener('click', () => {
  let total = operate(op, joinedArray1, joinedArray2);
  display.innerHTML = total;
});

//clears all the arrays

clear.addEventListener('click', () => {
  numArray = [];
  joinedArray1 = [];
  joinedArray2 = [];
  display.innerHTML = 0;
});

// ****** basic math functions *************/

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

//************ operator function **************/

function operate (operator, a, b) {
  return operator(a, b);
}

//function to combine an array of strings into one number 

function arrayCombined() {
    let numArrayJoined = +(numArray.join(''));
    rounded = Number(Math.round(numArrayJoined+'e'+10)+'e-'+10);
    display.innerHTML = rounded;
    joinedArray2 = rounded; 
}

//connects html operators to js operator functions

function operators(ope) {
  if (joinedArray1.length !== 0) {
    joinedArray2 = operate(op, joinedArray1, joinedArray2);
  }

  console.log({joinedArray1});
  joinedArray1 = joinedArray2;
  joinedArray2 = [];
  numArray = [];

  op = ope.textContent;
  console.log(op);

  if (op === '+') {
    op = add;
  }

  if (op === '-') {
    op = subtract;
  }

  if (op === 'x') {
    op = multiply;
  }

  if (op == '/') {
    op = divide;
  } 
}


