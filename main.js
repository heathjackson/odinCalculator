

let number = document.querySelectorAll('.number');
let opera = document.querySelectorAll('.opera');
const equal = document.getElementById('equals');
const clear = document.getElementById('clear');
const display = document.getElementById('display');
const decimal = document.getElementById('decimal');

let numArray = [];
let joinedArray1 = [];
let joinedArray2 = [];
let op = '';
let equalClicked = false;
let operaClicked = false;

decimal.addEventListener('click', () => {
  if (numArray.length === 0 || numArray.includes('.') === false) {
    numArray.push('.');
  }
  else {
    decimal.removeEventListener;
  } 
});

for (const numBtn of number) {
  numBtn.addEventListener('click', () => {
    if (equalClicked === true) {
      startOver();
    }

    equalClicked = false;
    operaClicked = false;
    num = numBtn.textContent;
    numArray.push(num);
    arrayCombined();
  });
}

for (const ope of opera) {
  ope.addEventListener('click', () => {
    if(operaClicked === false) {
    operators(ope);
    operaClicked = true;
  }
});
}

//makes equal button work

equal.addEventListener('click', () => {
  let total = operate(op, joinedArray1, joinedArray2);
  display.innerHTML = total;
  equalClicked = true; 
});

//clears all the arrays

clear.addEventListener('click', () => {
  startOver();
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
  equalClicked = false;

  if (joinedArray1.length !== 0) {
    joinedArray2 = operate(op, joinedArray1, joinedArray2);
  }

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

//clears the display and arrays and starts calculating from 0

function startOver() {
  numArray = [];
  joinedArray1 = [];
  joinedArray2 = [];
  display.innerHTML = 0;
}


