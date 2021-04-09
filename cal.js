class Calculator {
  constructor(previousEntry, currentEntry) {
    this.previousEntry = previousEntry;
    this.currentEntry = currentEntry;
    this.clear();
  }
  clear() {
    this.currentOperant = '';
    this.perviousOperant = '';
    this.operation = undefined;
  }

  delete() {
    //remove 1 number
  }

  appendNumber(number) {
    //whenever press number adds it on
  }

  chooseOperation(operation) {
    //whatever press for operation add it into the image
  }

  compute() {
    //does the calculator
  }

  updateDisplay() {
    this.currentEntry.innerText = this.currentEntry;
  }
}

const numberButtons = document.querySelectorAll('#number');
const operationButtons = document.querySelectorAll('#operator');
const equalButton = document.querySelector('#equal');
const deleteButton = document.querySelector('#delete');
const allClearButton = document.querySelector('#allclear');
const previousEntry = document.querySelector('#previous-entry');
const currentEntry = document.querySelector('#current-entry');

const calculator = new Calculator(previousEntry, currentEntry);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
