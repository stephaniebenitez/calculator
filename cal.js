class Calculator {
  constructor(previousEntry, currentEntry) {
    this.previousEntry = previousEntry;
    this.currentEntry = currentEntry;
    this.clear();
  }

  clear() {
    this.currentOperant = '';
    this.previousOperant = '';
    this.operation = undefined;
  }

  delete() {
    //remove 1 number
    this.currentOperant = this.currentOperant.toString().slice(0, -1);
  }

  appendNumber(number) {
    //whenever press number adds it on
    if (number === '.' && this.currentOperant.includes('.')) return;
    this.currentOperant = this.currentOperant.toString() + number.toString();
  }

  chooseOperation(operation) {
    //whatever press for operation add it into the image
  }

  compute() {
    //does the calculator
  }

  updateDisplay() {
    this.currentEntry.innerText = this.currentOperant;
    this.previousEntry.innerText = this.previousOperant;
  }
}

const numberButtons = document.querySelectorAll('#number');
const operationButtons = document.querySelectorAll('#operator');
const equalButton = document.querySelector('#equal');
const deleteButton = document.querySelector('#delete');
const allClearButton = document.querySelector('#allclear');
const previousEntry = document.querySelector('#previous-entry');
const currentEntry = document.querySelector('#current-entry');

console.log(previousEntry, currentEntry, deleteButton);

const calculator = new Calculator(previousEntry, currentEntry);
console.log(calculator);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    console.log(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    console.log(button.innerText);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener('click', () => {
  // calculator.currentOperant = '';
  // calculator.previousOperant = '';
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
