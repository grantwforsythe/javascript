const defaultResult = 0;
let currentResult = defaultResult

// function add(...numbers) {
//     return currentResult + userInput.value;
//     // return numbers.reduce((a, b) => a + b);
// }

function add() {
    currentResult += userInput.value;
    outputResult(currentResult, '');
}

function subtrack() {
    currentResult -= userInput.value;
    outputResult(currentResult, '');
}
function multiply() {
    currentResult *= userInput.value;
    outputResult(currentResult, '');
}
function divide() {
    currentResult /= userInput.value;
    outputResult(currentResult, '');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrack);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

