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
	return a / b;
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
        } else {
            display.textContent += character;
        }
    })
}

// --- 3. ADD EVENT LISTENERS ---
button.forEach(click);