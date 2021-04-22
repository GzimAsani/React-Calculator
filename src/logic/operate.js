import Big from 'big.js';

function operate(numA, numB, operation) {
  const a = Big(numA);
  const b = Big(numB);

  let value;

  if (operation === '+') {
    value = a.plus(b);
  }

  if (operation === '-') {
    value = a.minus(b);
  }

  if (operation === 'X') {
    value = a.times(b);
  }

  if (operation === '÷') {
    value = a.div(b);
  }

  if (operation === '%') {
    value = a.mod(b);
  }
  return value.toString();
}

export default operate;
