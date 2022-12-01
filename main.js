
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

let number = document.querySelectorAll('.number');
let opera = document.querySelectorAll('.opera');
const equal = document.getElementById('equals');

let numArray = [];
let joinedArray1 = [];
let joinedArray2 = [];

let op = ''; 

for (const numBtn of number) {
  numBtn.addEventListener('click', () => {
    num = numBtn.textContent;
    numArray.push(num);
    arrayCombined();
    console.log({joinedArray2});
    console.log({joinedArray1});
  });
}

for (const ope of opera) {
  ope.addEventListener('click', () => {
    operators(ope);
  });
}

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

    if (op === '/') {
      op = divide;
    } 
    console.log(op);
}

equal.addEventListener('click', () => {
  console.log(operate(op, joinedArray1, joinedArray2))
});

//function to combine an array of strings into one number 

function arrayCombined() {
    let numArrayJoined = +(numArray.join(''));
    document.getElementById('display')
    .innerHTML = numArrayJoined;
    joinedArray2 = numArrayJoined; 
}


