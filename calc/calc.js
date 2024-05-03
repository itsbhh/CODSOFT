let displayValue = '';
let memoryValue = 0;
let isScientific = false;
let isDarkMode = false;
function appendToDisplay(value) {
    if (value === '%') {
        displayValue += '/100*';
    } else {
        displayValue += value;
    }
    document.getElementById('display').textContent = displayValue;

}



function calculate() {
    try {
        const evaluatedValue = displayValue.replace(/%/g, '*0.01');
        const result = eval(evaluatedValue);
        document.getElementById('display').textContent = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        displayValue = '';
    }
}


function clearDisplay() {
    displayValue = '';
    document.getElementById('display').textContent = '0';
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').textContent = displayValue;
}

function calculate() {
    try {
        const evaluatedValue = displayValue.replace(/%/g, '*0.01');
        const result = eval(evaluatedValue);
        document.getElementById('display').textContent = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        displayValue = '';
    }
}

function toggleScientificMode() {
    isScientific = !isScientific;
    const scientificButtons = document.querySelectorAll('.scientific');

    if (isScientific) {
        scientificButtons.forEach(btn => {
            btn.style.display = 'inline-block';
        });
        document.querySelector('.calculator').style.maxWidth = '450px';
        document.querySelector('.calculator').style.height = 'auto';
    } else {
        scientificButtons.forEach(btn => {
            btn.style.display = 'none';
        });
        document.querySelector('.calculator').style.maxWidth = '350px';
        document.querySelector('.calculator').style.height = 'auto';
    }
}

function toggleMode() {
    const calculator = document.querySelector('.calculator');
    const modeToggle = document.getElementById('mode-toggle');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        calculator.classList.remove('light-mode');
        calculator.classList.add('dark-mode');
        modeToggle.textContent = 'Light Mode';
    } else {
        calculator.classList.remove('dark-mode');
        calculator.classList.add('light-mode');
        modeToggle.textContent = 'Dark Mode';
    }
}

