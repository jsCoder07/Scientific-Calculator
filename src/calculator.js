function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function appendFunction(func) {
    const display = document.getElementById('display');
    display.value += `${func}(`;
    display.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            calculate();
        }
    });
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Replace '^' with '**' for exponentiation
    expression = expression.replace(/\^/g, '**');
    
    try {
        // Use Function constructor to evaluate the expression
        display.value = new Function('return ' + expression)();
    } catch (error) {
        display.value = 'Error';
    }
}