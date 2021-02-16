let calculatorDisplay = document.querySelector("#calculator-display");
let clearButton = document.querySelector("#clear");
let numbersFromGrid = document.querySelectorAll("#num");
let operatorsFromGrid = document.querySelectorAll("#operator");
let equalButton = document.querySelector("#equal");
let delButton = document.querySelector("#del");
let fontSize = 80;
let sum ="";

for (let i = 0; i < numbersFromGrid.length; i++) {
    numbersFromGrid[i].addEventListener("click", addToSum);
}

for (let i = 0; i < operatorsFromGrid.length; i++) {
    operatorsFromGrid[i].addEventListener("click", addToSum);
}

clearButton.addEventListener("click", clearDisplay);
equalButton.addEventListener("click", calculateSum);
delButton.addEventListener("click", removeLast);

function removeLast() {
    sum = sum.slice(0, -1);
    updateDisplay(sum);
}

function addToSum(e) {
    sum += e.target.textContent;
    updateDisplay(sum);
}

function clearDisplay() {
    sum = "";
    updateDisplay(sum);
}

function updateDisplay(update) {
    checkoutputSize(update);
    calculatorDisplay.firstElementChild.textContent = update;
}

function calculateSum() {
    let value = eval(sum);
    sum = value;
    updateDisplay(value);
}

function checkoutputSize(output) {
    let outputElement = document.getElementById("output");
    let displayWidth = calculatorDisplay.clientWidth - fontSize;
    var width = (outputElement.clientWidth);
    if (width > displayWidth) {
        fontSize = fontSize - 5;
        outputElement.style.fontSize = `${fontSize}px`;
        outputElement.textContent = output;
    }
}