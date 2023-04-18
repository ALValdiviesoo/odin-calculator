let currentNum = "";
let previousNum = "";
let operator = "";

document.addEventListener("DOMContentLoaded", () => {
  let clear = document.querySelector(".clear");
  let equals = document.querySelector(".equals");
  let decimal = document.querySelector(".decimal");

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let currentScreen = document.querySelector(".currentScreen");
  let previousScreen = document.querySelector(".previousScreen");

  numbers.forEach((num) => num.addEventListener("click", (e) => {
    handleNum(e.target.textContent);
    currentScreen.textContent = currentNum;
  }))

  operators.forEach((op) => op.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
    previousScreen.textContent = `${previousNum} ${operator}`;
    currentScreen.textContent = currentNum;
  })) 

  clear.addEventListener("click", () => {
    currentNum = "";
    previousNum = "";
    operator = "";

    currentScreen.textContent = currentNum;
    previousScreen.textContent = previousNum;
  })

  equals.addEventListener("click", () => {
    if(currentNum != "" && previousNum != "") {
      operate();
      previousScreen.textContent = "";
      if(previousNum.length <= 7) {
        currentScreen.textContent = previousNum;
      } else {
        currentScreen.textContent = previousNum.slice(0, 5) + "...";
      }
    }
  })

  decimal.addEventListener("click", () => {
    addDecimal();
    currentScreen.textContent = currentNum;
  })
})

function handleNum(number) {
  if(currentNum.length <= 5) {
    currentNum += number;
  }
}

function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  currentNum = "";
}

function operate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  switch(operator) {
    case "+":
      previousNum += currentNum;
      break;

    case "-":
      previousNum -= currentNum;
      break;
    
    case "/":
      previousNum /= currentNum;
    break;

    case "x":
      previousNum *= currentNum;
  }

  previousNum = roundNum(previousNum);
  previousNum = previousNum.toString();
  currentNum = previousNum.toString();
}

function roundNum(num) {
  return Math.round(num * 1000) / 1000;
}

function addDecimal() {
  if (currentNum == "") {
    currentNum += "0.";
  }
  if (!currentNum.includes(".")) {
    currentNum += ".";
  }
}