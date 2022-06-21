// This calculator will perform basic operations like Addition, Subtraction, Multiplication, & Division.

// take the first operand input
const number1 = parseInt(prompt('Enter first number: '));

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the second operand input
const number2 = parseInt(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
document.write(`${number1} ${operator} ${number2} = ${result}`);