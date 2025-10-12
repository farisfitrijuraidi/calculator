let firstValue = null;
let operatorValue = null;
let secondValue = null;
let finalAnswer = false;

// --- 1. SELECT DOM ELEMENTS ---
const button = document.querySelectorAll('button');
const display = document.querySelector('p');

// --- 2. DEFINE FUNCTIONS ---
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
    if (b === 0) {
        return 'Nope!'
    } else {
	    return a / b;
    }
};

const operate = function(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === 'x') {
        return multiply(num1 , num2); 
    } else if (operator === '÷') {
        return divide(num1, num2);
    }
}

const click = function(key) {
    key.addEventListener('click', (e) => {
        let character = e.target.textContent;
        let id = e.target.id;

        if (id === 'delete') {
            display.textContent = display.textContent.slice(0, -1);
        } else if (id === 'clear') {
            display.innerHTML = '';
            firstValue = null;
            secondValue = null;
            operatorValue = null;
        } else if (id === 'add' || id === 'subtract' || id === 'multiply' || id === 'divide') {
            if (operatorValue !== null && firstValue !== null) {
                secondValue = Number(display.textContent);
                firstValue = parseFloat(operate(operatorValue, firstValue, secondValue).toFixed(3));
                operatorValue = character;
                display.innerHTML = '';
            } else {
                operatorValue = character;
                firstValue = Number(display.textContent);
                display.innerHTML = '';
            }
        } else if (id === 'equal') {
            if (firstValue === null || operatorValue === null){
                return;
            } else {
                secondValue = Number(display.textContent);
                let result = operate(operatorValue, firstValue, secondValue);

                if (typeof result === 'number') {
                    display.textContent = result.toLocaleString('en-US', {
                        minimumFractionDigits : 0,
                        maximumFractionDigits : 7
                    })
                } else {
                    display.textContent = result;
                }
                finalAnswer = true;
            }
        } else if (id === 'dot') {
            if (display.textContent.includes('.')) {
                return;
            } else {
                display.textContent += character;
            }
        } else {
            if (finalAnswer) {
                display.innerHTML = '';
                display.textContent += character;
                finalAnswer = false;
            } else {
                display.textContent += character;
            }   
        }
    })
}

// --- 3. ADD EVENT LISTENERS ---
button.forEach(click);