const equal = document.querySelector(".btn-operation-equal");
const operations = document.querySelectorAll(".btn-operation");
const numbers = document.querySelectorAll(".btn-number");
const deleteBtn = document.querySelector(".btn-delete");
const clearBtn = document.querySelector(".btn-clear");
const dotBtn = document.querySelector(".btn-dot");
let outputFirst = document.querySelector(".output-first");
let outputSecond = document.querySelector(".output-secondary");

function calculator() {
  this.firstNumber = "";
  this.secondNumber = "";
  this.operation = "";
  this.result = null;
}
calculator.prototype.resetCalculator = function () {
  this.firstNumber = "";
  this.secondNumber = "";
  this.operation = "";
};
calculator.prototype.inputNumber = function (number) {
  if (!this.operation || (this.operation && !this.secondNumber)) {
    this.firstNumber += number;
  } else if (this.operation && this.secondNumber) {
    this.firstNumber += number;
  }
  return (outputFirst.textContent = this.firstNumber);
};

calculator.prototype.setOperation = function (op) {
  if (this.result !== null) {
    this.firstNumber = this.result.toString();
    this.result = null;
  }
  if (this.secondNumber !== "") {
    this.logicOperation();
    this.secondNumber = this.result.toString();
    this.result = null;
  }

  this.secondNumber = this.firstNumber;
  this.firstNumber = "";
  this.operation = op;
  outputSecond.textContent = this.secondNumber + this.operation;
  outputFirst.textContent = "";
};

calculator.prototype.operations = {
  add: (a, b) => a + b,
  subtraction: (a, b) => b - a,
  divide: (a, b) => b / a,
  multiplication: (a, b) => a * b,
};
calculator.prototype.logicOperation = function () {
  this.firstNumber = parseFloat(this.firstNumber);
  this.secondNumber = parseFloat(this.secondNumber);
  switch (this.operation) {
    case "+":
      this.result = this.operations.add(this.firstNumber, this.secondNumber);
      break;
    case "-":
      this.result = this.operations.subtraction(
        this.firstNumber,
        this.secondNumber
      );
      break;
    case "/":
      if (this.secondNumber === 0) {
        this.displayError("Cannot divide by 0");
        return;
      }
      this.result = this.operations.divide(this.firstNumber, this.secondNumber);
      break;
    case "*":
      this.result = this.operations.multiplication(
        this.firstNumber,
        this.secondNumber
      );
      break;
    default:
      return;
  }

  this.firstNumber = this.result;
  this.secondNumber = "";
  this.operation = "";
};

calculator.prototype.displayUX = function (firstOutput, secondOutput) {
  outputFirst.textContent = firstOutput;
  outputSecond.textContent = secondOutput;
};
calculator.prototype.displayError = function (errorMessage) {
  outputFirst.textContent = errorMessage;
  outputSecond.textContent = "";
};
calculator.prototype.deleteOneElement = function () {
  if (this.firstNumber.length > 0) {
    this.firstNumber = this.firstNumber.slice(0, -1);
  }
};
calculator.prototype.inputDecimal = function () {
  if (!this.firstNumber.includes(".")) {
    this.firstNumber += ".";
  }
};
calculator.prototype.getNum1 = function () {
  return this.firstNumber;
};
calculator.prototype.getNum2 = function () {
  return this.secondNumber;
};
calculator.prototype.getOperation = function () {
  return this.operation;
};
calculator.prototype.getResult = function () {
  return this.result;
};

const logic = new calculator();

numbers.forEach((el) => {
  el.addEventListener("click", function (e) {
    const value = e.target.value;
    logic.inputNumber(value);
  });
});
operations.forEach((el) => {
  el.addEventListener("click", function (e) {
    const value = e.target.textContent;
    logic.setOperation(value);
  });
});
equal.addEventListener("click", function () {
  result = logic.logicOperation();
  logic.displayUX(logic.getResult(), "");
  logic.resetCalculator();
});
clearBtn.addEventListener("click", function () {
  logic.resetCalculator();
  logic.displayUX();
});
deleteBtn.addEventListener("click", function () {
  logic.deleteOneElement();
  logic.displayUX(logic.getNum1(), outputSecond.textContent);
});
dotBtn.addEventListener("click", function () {
  logic.inputDecimal();
  logic.displayUX(logic.getNum1(), `${logic.getNum2()}${logic.getOperation()}`);
});
