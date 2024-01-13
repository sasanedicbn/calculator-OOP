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
