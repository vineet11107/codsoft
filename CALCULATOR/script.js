let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay(currentInput);
    }
}

function appendOperator(op) {
    if (currentInput === '' && op === '-')
        {
        currentInput = '-';
        updateDisplay(currentInput);
    } else if (currentInput !== '') {
        calculateIntermediateResult();
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        updateDisplay('0');
    } else {
        updateDisplay(currentInput);
    }
}

function calculateResult() {
    if (previousInput !== '' && currentInput !== '') {
        currentInput = operate(operator, parseFloat(previousInput), parseFloat(currentInput)).toString();
        operator = '';
        previousInput = '';
        updateDisplay(currentInput);
    }
}

function calculateIntermediateResult() {
    if (previousInput !== '' && currentInput !== '') {
        previousInput = operate(operator, parseFloat(previousInput), parseFloat(currentInput)).toString();
        updateDisplay(previousInput);
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return b;
    }
}

function updateDisplay(value) {
    display.textContent = value.length > 10 ? parseFloat(value).toPrecision(10) : value;
}
