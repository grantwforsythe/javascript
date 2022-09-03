const defaultResult = 0;
let currentResult = defaultResult
let logEntries = [];

/**
 * Get input from input field.
 * @returns parse user input as an int
 */
function getUserInput() {
    return parseInt(userInput.value)
}

/**
 * Generates and writes calculation log.
 * @param {string}  operator        mathematical operation
 * @param {int}     initialResult   previous value
 * @param {int}     calcNumber      change in value
 */
function writeOutput(operator, initialResult, calcNumber) {
    const description = `${currentResult} ${operator} ${calcNumber}`;
    outputResult(currentResult, description);
    logEntries.push(calcNumber);
    console.log(logEntries);
}

function add() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += calcNumber;
    writeOutput('+', initialResult, calcNumber);
}

function subtrack() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= calcNumber;
    writeOutput('-', initialResult, calcNumber);
}

function multiply() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= calcNumber;
    writeOutput('*', initialResult, calcNumber);
}

function divide() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= calcNumber;
    writeOutput('/', initialResult, calcNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrack);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
