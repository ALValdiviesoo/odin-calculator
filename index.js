let currentNumber = "";
let previousNumber = "";
let operator = "";
let again = false;

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
  previousNumber = "";
  previousScreen.textContent = previousNumber;
}

operators.forEach((ope) => {
  ope.addEventListener("mousedown", () => {
    if(currentScreen.textContent != "" && previousScreen.textContent != "") {
      again = true;  
      equalClick(ope.textContent);
    } else {
      operator = ope.textContent;
      previousNumber = currentScreen.textContent;
      previousScreen.textContent = `${previousNumber} ${operator}`;
      currentNumber = "";
      currentScreen.textContent = currentNumber;
    }
  })
})

function equalClick(ope) {
  currentNumber = currentScreen.textContent;

  switch(operator) {
    case 'x':
      if(again == true) {
        previousScreen.textContent = `${(Number(currentNumber) * Number(previousNumber))} ${ope}`;
        previousNumber = `${(Number(currentNumber) * Number(previousNumber))}`;
        currentNumber = "";
        currentScreen.textContent = currentNumber;
      } else {
        previousScreen.textContent = "";
        currentScreen.textContent = (Number(currentNumber) * Number(previousNumber));
      }
      break;

    case '-':
      if(again == true) {
        previousScreen.textContent = `${(Number(previousNumber) - Number(currentNumber))} ${ope}`;
        previousNumber = `${(Number(previousNumber) - Number(currentNumber))}`;
        currentNumber = "";
        currentScreen.textContent = currentNumber;
      } else {
        previousScreen.textContent = "";
        currentScreen.textContent = (Number(previousNumber) - Number(currentNumber));
      }
      break;

    case '+':
      if(again == true) {
        previousScreen.textContent = `${(Number(currentNumber) + Number(previousNumber))} ${ope}`;
        previousNumber = `${(Number(currentNumber) + Number(previousNumber))}`;
        currentNumber = "";
        currentScreen.textContent = currentNumber;
      } else {
        previousScreen.textContent = "";
        currentScreen.textContent = (Number(currentNumber) + Number(previousNumber));
      }
      break;

    case '/':
      if(again == true) {
        previousScreen.textContent = `${(Number(previousNumber) / Number(currentNumber))} ${ope}`;
        previousNumber = `${(Number(previousNumber) / Number(currentNumber))}`;
        currentNumber = "";
        currentScreen.textContent = currentNumber;
      } else {
        previousScreen.textContent = "";
        currentScreen.textContent = (Number(previousNumber) / Number(currentNumber));
      }
      break;
  }

  currentNumber = "";  
}

equal.onclick = () => equalClick(operator);

decimal.onclick = () => {
  if (currentScreen.textContent == "") {
    currentNumber += "0."
    currentScreen.textContent = currentNumber;
  } else {
    currentNumber += decimal.textContent;
    currentScreen.textContent = currentNumber;
  }
}