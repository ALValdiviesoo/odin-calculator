let currentNumber = "";
let previousNumber = "";
let operator = "";

let clear = document.querySelector('.clear');
let equal = document.querySelector('.equals');
let decimal = document.querySelector('.decimal');

let number = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let previousScreen = document.querySelector('.previousScreen');
let currentScreen = document.querySelector('.currentScreen');

number.forEach((num) => {
  num.addEventListener("mousedown", () => {
    if (currentNumber.length < 6) {
      currentNumber += num.textContent;
      currentScreen.textContent = currentNumber;
    } 
  })
})

clear.onclick = () => {
  currentScreen.textContent = "";
}

operators.forEach((ope) => {
  ope.addEventListener("mousedown", () => {
    operator = ope.textContent;
    console.log(operator);
    previousNumber = currentScreen.textContent;
    previousScreen.textContent = `${previousNumber} ${operator}`;
    currentNumber = ""
    currentScreen.textContent = currentNumber;
  })
})