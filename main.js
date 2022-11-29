
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

console.log(operate(divide, 10, 5))


let numButton = document.querySelectorAll('.number');

let numArray1 = [];
let array1Concacted = [];
let numArray2 = [];
let array2Concacted = [];


for (const numBtn of numButton) {
  numBtn.addEventListener('click', () => {
    num = numBtn.textContent;
    numArray1.push(num);
    let numArrayJoin = +(numArray1.join(''));
    document.getElementById('display')
    .innerHTML = numArrayJoin; 
    array1Concacted.push(numArrayJoin);  
  });
}

console.log (array1Concacted);


 



