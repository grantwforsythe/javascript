const task3Element = document.getElementById('task-3');

function helloWorld() {
    alert('Hello, World!');
}

function greet(name) {
    alert(`Hello, ${name}!`);
}

/**
 * Concatenate an array of strings together
 * @param   {Array}     words   An array of strings
 * @returns {String}            The concatenated string 
 */
function concatenate(...words) {
    return words.join(' ');
}


helloWorld();
greet('Grant');

task3Element.addEventListener('click', helloWorld);

let word = concatenate('The', 'cow', 'jumped', 'over', 'the', 'moon');
alert(`Word = '${word}.'`)