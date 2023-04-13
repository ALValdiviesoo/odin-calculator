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
  currentNumber = "";
  currentScreen.textContent = currentNumber;
}

operators.forEach((ope) => {
  ope.addEventListener("mousedown", () => {
    operator = ope.textContent;
    previousNumber = currentScreen.textContent;
    previousScreen.textContent = `${previousNumber} ${operator}`;
    currentNumber = "";
    currentScreen.textContent = currentNumber;
  })
})

equal.onclick = () => {
  currentNumber = currentScreen.textContent;

  switch(operator) {
    case 'x':
      previousScreen.textContent = "";
      currentScreen.textContent = (Number(currentNumber) * Number(previousNumber));
      break;

    case '-':
      previousScreen.textContent = "";
      currentScreen.textContent = (Number(previousNumber) - Number(currentNumber));
      break;

    case '+':
      previousScreen.textContent = "";
      currentScreen.textContent = (Number(currentNumber) + Number(previousNumber));
      break;

    case '/':
      previousScreen.textContent = "";
      currentScreen.textContent = (Number(previousNumber) / Number(currentNumber));
      break;
  }
}