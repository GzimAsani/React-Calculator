import Big from 'big.js';

const plus = (a, b) => `${a.plus(b)}`;

const subtract = (a, b) => a.minus(b).valueOf();

const divide = (a, b) => (`${b}` === '0' ? 'INFINITY' : a.div(b).valueOf());

const multiply = (a, b) => a.times(b).valueOf();

function operate(numberOne, numberTwo, operation) {
  const num1 = typeof numberOne !== 'number' ? Big(Number(numberOne)) : Big(numberOne);
  const num2 = typeof numberTwo !== 'number' ? Big(Number(numberTwo)) : Big(numberTwo);
  let result = 0;

  const expr = operation;
  switch (expr) {
    case '+':
      result = plus(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case 'x':
      result = multiply(num1, num2);
      break;
    case '÷':
      result = divide(num1, num2);
      break;
    case '%':
      result = num1.times((num2.div(100).toFixed(1)));
      break;
    default:
      result = 0;
      break;
  }

  return result.toString();
}

export default operate;
