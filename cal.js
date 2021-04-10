class Calculator {
  constructor(previousEntry, currentEntry) {
    this.previousEntry = previousEntry;
    this.currentEntry = currentEntry;
    this.operation = null;
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
    if (number === '0' && this.currentOperant.length === 0) return;
    this.currentOperant = this.currentOperant.toString() + number.toString();

  }

  chooseOperation(operation) {
   // whatever press for operation add it into the image
    if (this.currentOperant.length === 0) return;

    if (this.previousOperant.length > 0){
      this.compute();
    } else {
    this.operation = operation;
    this.previousOperant = this.currentOperant;
    this.currentOperant = ''
    }

  }
  

  compute() {
    //does the calculator
    let prev =parseFloat(this.previousOperant);
    let curr = parseFloat(this.currentOperant);
    let ret;
    if (prev === NaN|| curr === NaN)return;
    const obj = {};
    if(this.operation ==="+"){
      ret = prev +curr
    }
    if (this.operation === "-"){
      ret =prev - curr
    }
    if (this.operation ==="×"){
      ret = prev*curr
    }
    
    if (this.operation ==="÷"){
      ret = prev/curr;
    }
    this.currentOperant = ""
    this.operation = undefined;
    this.previousOperant = ret
  
  }

  updateDisplay() {
    this.currentEntry.innerText = this.currentOperant;
    if(this.operation){
      this.previousEntry.innerText = `${this.previousOperant} ${this.operation}`
    } else {
    this.previousEntry.innerText= `${this.previousOperant}`
  }
}

}

const numberButtons = document.querySelectorAll('#number');
const operationButtons = document.querySelectorAll('#operator');
const equalButton = document.querySelector('#equal');
const deleteButton = document.querySelector('#delete');
const allClearButton = document.querySelector('#allclear');
const previousEntry = document.querySelector('#previous-entry');
const currentEntry = document.querySelector('#current-entry');

//console.log(previousEntry, currentEntry, deleteButton);

const calculator = new Calculator(previousEntry, currentEntry);
console.log(calculator);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    console.log(button.innerText);
    console.log(calculator.currentOperant);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((operant)=> {
  operant.addEventListener('click', () => {
  calculator.chooseOperation(operant.innerText);
    console.log(operant.innerText);
    calculator.updateDisplay();
    
  });
})


//chrome doesnt like event listener
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

equalButton.addEventListener('click',()=>{
  calculator.compute();
  calculator.updateDisplay();
})
