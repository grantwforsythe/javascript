const defaultResult = 0;
let currentResult = defaultResult
let logEntries = [];

/**
 * Get input from input field.
 * @returns parse user input as an int
 */
function getUserInput() {
    return userInput.value.length === 0 ? 0 : parseInt(userInput.value);
}

function writeToLog(
    operationalIdentifier,
    initialResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationalIdentifier,
        initialResult: initialResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries[logEntries.length - 1]);
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
}

function add() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += calcNumber;
    writeOutput('+', initialResult, calcNumber);
    writeToLog('ADD', initialResult, calcNumber, currentResult);
}

function subtrack() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= calcNumber;
    writeOutput('-', initialResult, calcNumber);
    writeToLog('SUBTRACK', initialResult, calcNumber, currentResult);
}

function multiply() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= calcNumber;
    writeOutput('*', initialResult, calcNumber);
    writeToLog('MULTIPLY', initialResult, calcNumber, currentResult);
}

function divide() {
    const calcNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= calcNumber;
    writeOutput('/', initialResult, calcNumber);
    writeToLog('DIVIDE', initialResult, calcNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrack);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
