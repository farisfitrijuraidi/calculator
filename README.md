# Calculator

This is a functional browser-based calculator created as part of The Odin Project's Foundations curriculum. It mimics the core features and design of a standard pocket calculator, built with a focus on handling user input and managing the state of a multi-step mathematical operation.

---

## Features
* Performs the four basic arithmetic operations: addition, subtraction, multiplication, and division.
* Handles multi-digit numbers and decimal (floating-point) inputs.
* Supports chaining multiple operations together (e.g., `10 + 5 * 2 = 30`).
* Includes a 'Clear' (C) button to fully reset the calculator and a 'Delete' (⌫) button to act as a backspace.
* Provides robust error handling for invalid operations, such as displaying a message for division by zero.
* Formats large numbers with thousands separators (commas) for improved readability.
* Features a responsive user interface with visual feedback for button presses using CSS `:hover` and `:active` states.

---

## What I Learned
This project was a comprehensive exercise in building an interactive application that requires careful state management. It forced me to think beyond simple DOM manipulation and focus on the logical flow of user input.

Key takeaways include:
* **State Management**: The core challenge was managing the calculator's state. I learned to use global variables (`firstValue`, `operatorValue`, `secondValue`) to store the different parts of an equation as the user enters them. This taught me how to "remember" information between user interactions.
* **Event-Driven Logic**: I built a single, robust event listener for all buttons, using `if/else if` blocks to route the logic based on the type of button pressed (number, operator, equals, or special function). This was a practical lesson in creating a centralised control system for user input.
* **Handling Edge Cases**: A simple calculator has many potential points of failure. I learned to anticipate and prevent these by:
    * Implementing a "flag" variable (`finalAnswer`) to correctly handle starting a new calculation after a result is displayed.
    * Adding guards to prevent errors from premature actions, like pressing the equals button before an equation is complete.
    * Building checks to prevent invalid inputs, such as multiple decimal points in a single number.
* **Code Modularity**: The importance of creating small, single-purpose functions (e.g., `add`, `subtract`) that are managed by a higher-level `operate` function. This made the code cleaner, easier to debug, and more reusable.
* **Number Formatting and Display**: I learned how to use built-in JavaScript methods like `.toLocaleString()` and `.toFixed()` to format numbers for the user, improving readability and preventing display overflow. This was a great lesson in separating the raw data from its user-facing presentation.

---

## Acknowledgements
* This project is based on the [Calculator assignment](https://www.theodinproject.com/lessons/foundations-calculator) from The Odin Project.