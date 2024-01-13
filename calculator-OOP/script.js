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
